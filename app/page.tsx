"use client";

import LeagueTable from "@/components/LeagueTable";
import { teams as baseTeams } from "@/lib/data/teams";
import { generateFixtures } from "@/lib/engine/fixture-generator";
import { simulateRound } from "@/lib/engine/simulate-round";
import { Fixture, Result, ResultTag, Team } from "@/types/league";
import { useMemo, useState } from "react";

function cloneTeams(teams: Team[]): Team[] {
  return teams.map((team) => ({
    ...team,
    form: [...team.form],
  }));
}

function getRandomSeasonBoost(baseOvr: number): number {
  // Elite teams get slightly more upside to allow dominant seasons
  if (baseOvr >= 88) {
    return Number(((Math.random() * 6) - 1.5).toFixed(2)); // -1.5 to +4.5
  }

  if (baseOvr >= 82) {
    return Number(((Math.random() * 5) - 2).toFixed(2)); // -2 to +3
  }

  return Number(((Math.random() * 4) - 2).toFixed(2)); // -2 to +2
}

function prepareSeasonTeams(teams: Team[]): Team[] {
  return teams.map((team) => ({
    ...team,
    form: [],
    seasonBoost: getRandomSeasonBoost(team.ovr),
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    points: 0,
  }));
}

function getTagLabel(tag: ResultTag): string {
  switch (tag) {
    case "HOME_SURVIVAL":
    case "AWAY_SURVIVAL":
      return "Survival Instinct";
    case "HOME_TITLE_PRESSURE":
    case "AWAY_TITLE_PRESSURE":
      return "Title Pressure";
    case "RELEGATION_SIX_POINTER":
      return "Six Pointer";
    case "TITLE_CLASH":
      return "Title Clash";
    default:
      return tag;
  }
}

function getVisibleTagLabels(tags: ResultTag[]): string[] {
  const labels = tags.map(getTagLabel);
  return [...new Set(labels)];
}

function getTagClass(label: string): string {
  switch (label) {
    case "Survival Instinct":
      return "bg-red-50 text-red-700";
    case "Title Pressure":
      return "bg-amber-50 text-amber-700";
    case "Six Pointer":
      return "bg-orange-50 text-orange-700";
    case "Title Clash":
      return "bg-violet-50 text-violet-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function Home() {
  const initialFixtures = useMemo(() => generateFixtures(baseTeams), []);

  const [mode, setMode] = useState<"chaos" | "realistic">("realistic");
  const [tableTeams, setTableTeams] = useState<Team[]>(prepareSeasonTeams(baseTeams));
  const [fixtures, setFixtures] = useState<Fixture[]>(initialFixtures);
  const [results, setResults] = useState<Result[]>([]);
  const [currentRound, setCurrentRound] = useState(1);

  const currentRoundFixtures = fixtures.filter(
    (fixture) => fixture.round === currentRound
  );

  const seasonComplete = currentRound > 38;
  const playedMatches = fixtures.filter((fixture) => fixture.played).length;
  const remainingRounds = seasonComplete ? 0 : 39 - currentRound;

  function handleResetSeason() {
    setTableTeams(cloneTeams(baseTeams));
    setFixtures(generateFixtures(baseTeams));
    setResults([]);
    setMode("realistic");
    setCurrentRound(1);
  }

  function simulateSingleRound(
    roundNumber: number,
    teamsState: Team[],
    fixturesState: Fixture[],
    resultsState: Result[]
  ) {
    const { updatedTeams, updatedFixtures, roundResults } = simulateRound(
      teamsState,
      fixturesState,
      roundNumber,
      mode
    );

    return {
      updatedTeams,
      updatedFixtures,
      updatedResults: [...roundResults, ...resultsState].slice(0, 30),
    };
  }

  function handleSimulateNextRound() {
    if (seasonComplete) return;

    const { updatedTeams, updatedFixtures, updatedResults } =
      simulateSingleRound(currentRound, tableTeams, fixtures, results);

    setTableTeams(updatedTeams);
    setFixtures(updatedFixtures);
    setResults(updatedResults);
    setCurrentRound((prev) => prev + 1);
  }

  function handleSimulateFiveRounds() {
    if (seasonComplete) return;

    let nextTeams = tableTeams;
    let nextFixtures = fixtures;
    let nextResults = results;
    let nextRound = currentRound;

    const roundsToSimulate = Math.min(5, remainingRounds);

    for (let i = 0; i < roundsToSimulate; i++) {
      const simulated = simulateSingleRound(
        nextRound,
        nextTeams,
        nextFixtures,
        nextResults
      );

      nextTeams = simulated.updatedTeams;
      nextFixtures = simulated.updatedFixtures;
      nextResults = simulated.updatedResults;
      nextRound += 1;
    }

    setTableTeams(nextTeams);
    setFixtures(nextFixtures);
    setResults(nextResults);
    setCurrentRound(nextRound);
  }

  function handleSimulateToEnd() {
    if (seasonComplete) return;

    let nextTeams = tableTeams;
    let nextFixtures = fixtures;
    let nextResults = results;
    let nextRound = currentRound;

    while (nextRound <= 38) {
      const simulated = simulateSingleRound(
        nextRound,
        nextTeams,
        nextFixtures,
        nextResults
      );

      nextTeams = simulated.updatedTeams;
      nextFixtures = simulated.updatedFixtures;
      nextResults = simulated.updatedResults;
      nextRound += 1;
    }

    setTableTeams(nextTeams);
    setFixtures(nextFixtures);
    setResults(nextResults);
    setCurrentRound(nextRound);
  }

  function getTeamName(teamId: string) {
    return baseTeams.find((team) => team.id === teamId)?.name ?? teamId;
  }

  function handleModeToggle() {
    setMode((prev) => (prev === "realistic" ? "chaos" : "realistic"));
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4 xl:p-6">
      <div className="mx-auto max-w-[1800px] space-y-6">
        <header className="rounded-2xl bg-emerald-800 p-4 text-white shadow">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <h1 className="text-3xl font-bold">League Simulator</h1>
              <p className="text-sm text-emerald-100">
                Fun football season generator
              </p>
            </div>

            <div className="flex flex-wrap items-end gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-100">
                  Simulation Mode
                </span>

                <button
                  onClick={handleModeToggle}
                  className={`flex items-center gap-3 rounded-full px-3 py-2 transition ${
                    mode === "chaos"
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-900"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      mode === "realistic" ? "text-emerald-700" : "text-slate-300"
                    }`}
                  >
                    Realistic
                  </span>

                  <span
                    className={`relative inline-flex h-7 w-14 items-center rounded-full transition ${
                      mode === "chaos" ? "bg-red-500" : "bg-emerald-500"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                        mode === "chaos" ? "translate-x-8" : "translate-x-1"
                      }`}
                    />
                  </span>

                  <span
                    className={`text-sm font-semibold ${
                      mode === "chaos" ? "text-red-300" : "text-slate-500"
                    }`}
                  >
                    Chaos
                  </span>
                </button>
              </div>

              <button
                onClick={handleSimulateNextRound}
                disabled={seasonComplete}
                className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Simulate Next Round
              </button>

              <button
                onClick={handleSimulateFiveRounds}
                disabled={seasonComplete}
                className="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Simulate 5 Rounds
              </button>

              <button
                onClick={handleSimulateToEnd}
                disabled={seasonComplete}
                className="rounded-xl bg-violet-600 px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Simulate to End
              </button>

              <button
                onClick={handleResetSeason}
                className="rounded-xl bg-yellow-400 px-4 py-2 font-medium text-slate-900"
              >
                Reset Season
              </button>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-12">
          <div className="rounded-2xl bg-white p-4 shadow xl:col-span-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Premier League Table
              </h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                {seasonComplete ? "Season Complete" : `Round ${currentRound}`}
              </span>
            </div>

            <div className="overflow-x-auto">
              <LeagueTable teams={tableTeams} seasonComplete={seasonComplete} />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow xl:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                {seasonComplete
                  ? "Season Complete"
                  : `Round ${currentRound} Fixtures`}
              </h2>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                {seasonComplete ? "Done" : "Upcoming"}
              </span>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              {!seasonComplete ? (
                currentRoundFixtures.map((fixture) => (
                  <div
                    key={fixture.id}
                    className="rounded-xl border border-slate-200 p-3"
                  >
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                      <span className="truncate font-medium text-slate-900">
                        {getTeamName(fixture.homeTeamId)}
                      </span>

                      <span className="text-center text-xs font-bold uppercase tracking-wide text-slate-500">
                        vs
                      </span>

                      <span className="truncate text-right font-medium text-slate-900">
                        {getTeamName(fixture.awayTeamId)}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-slate-200 p-3 text-slate-700">
                  All 38 rounds have been simulated.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow xl:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Recent Results</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                {playedMatches} played
              </span>
            </div>

            <div className="max-h-[900px] space-y-3 overflow-y-auto pr-1 text-sm text-slate-700">
              {results.length === 0 ? (
                <div className="rounded-xl border border-slate-200 p-3">
                  No matches simulated yet
                </div>
              ) : (
                results.map((result) => (
                  <div
                    key={result.fixtureId}
                    className="rounded-xl border border-slate-200 p-3"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-7 min-w-[52px] items-center justify-center rounded-lg bg-emerald-50 text-xs font-bold text-emerald-700">
                        GW-{result.round}
                      </span>

                      <div className="flex flex-1 items-center justify-between gap-2">
                        <span className="flex-1 font-medium text-slate-900">
                          {getTeamName(result.homeTeamId)}
                        </span>

                        <span className="whitespace-nowrap font-bold text-slate-900">
                          {result.homeGoals} - {result.awayGoals}
                        </span>

                        <span className="flex-1 text-right font-medium text-slate-900">
                          {getTeamName(result.awayTeamId)}
                        </span>
                      </div>
                    </div>

                    {getVisibleTagLabels(result.tags ?? []).length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {getVisibleTagLabels(result.tags ?? []).map(
                          (label, index) => (
                            <span
                              key={`${result.fixtureId}-${label}-${index}`}
                              className={`rounded-full px-2 py-1 text-[11px] font-semibold ${getTagClass(
                                label
                              )}`}
                            >
                              {label}
                            </span>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
