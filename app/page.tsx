"use client";

import LeagueTable from "@/components/LeagueTable";
import { currentSeasonSnapshot } from "@/lib/data/currentSeasonSnapshot";
import { teams as baseTeams } from "@/lib/data/teams";
import { upcomingFixtures } from "@/lib/data/upcomingFixtures";
import { generateFixtures } from "@/lib/engine/fixture-generator";
import { simulateRound } from "@/lib/engine/simulate-round";
import { Fixture, Result, ResultTag, Team } from "@/types/league";
import { useMemo, useState } from "react";
// function cloneTeams(teams: Team[]): Team[] {
// 	return teams.map((team) => ({
// 		...team,
// 		form: [...team.form],
// 	}));
// }

function getRandomSeasonBoost(baseOvr: number): number {
	if (baseOvr >= 88) {
		return Number(((Math.random() * 6) - 1.5).toFixed(2));
	}

	if (baseOvr >= 82) {
		return Number(((Math.random() * 5) - 2).toFixed(2));
	}

	return Number(((Math.random() * 4) - 2).toFixed(2));
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

function getResultOutcome(
	result: Result,
	teamId: string
): "W" | "D" | "L" {
	const isHome = result.homeTeamId === teamId;

	const teamGoals = isHome ? result.homeGoals : result.awayGoals;
	const opponentGoals = isHome ? result.awayGoals : result.homeGoals;

	if (teamGoals > opponentGoals) return "W";
	if (teamGoals === opponentGoals) return "D";
	return "L";
}

function getOutcomeClass(outcome: "W" | "D" | "L"): string {
	switch (outcome) {
		case "W":
			return "bg-emerald-50 border-emerald-400 text-emerald-800";
		case "D":
			return "bg-yellow-50 border-yellow-400 text-yellow-800";
		case "L":
			return "bg-red-50 border-red-400 text-red-800";
	}
}

const getRowOutcomeClass = (outcome: "W" | "D" | "L") => {
	switch (outcome) {
		case "W":
			return "bg-emerald-50 border-emerald-200";
		case "D":
			return "bg-amber-50 border-amber-200";
		case "L":
			return "bg-rose-50 border-rose-200";
		default:
			return "bg-white border-slate-200";
	}
};

// const applySnapshotToTeams = (baseTeams: Team[]) => {
// 	const snapshotMap = new Map(
// 		currentSeasonSnapshot.table.map((entry) => [entry.teamId, entry])
// 	);

// 	return baseTeams.map((team) => {
// 		const snap = snapshotMap.get(team.id);
// 		if (!snap) return team;

// 		return {
// 			...team,
// 			played: snap.played,
// 			won: snap.won,
// 			drawn: snap.drawn,
// 			lost: snap.lost,
// 			gf: snap.gf,
// 			ga: snap.ga,
// 			gd: snap.gd,
// 			points: snap.points,
// 		};
// 	});
// };

// const getRemainingFixtures = (allFixtures: Fixture[]) => {
// 	const completedFixtureIds = new Set(
// 		currentSeasonSnapshot.completedResults.map((result) => result.fixtureId)
// 	);

// 	return allFixtures.filter((fixture) => !completedFixtureIds.has(fixture.id));
// };

export default function Home() {
	const initialFixtures = useMemo(() => generateFixtures(baseTeams), []);

	const [mode, setMode] = useState<"chaos" | "realistic">("realistic");
	const [tableTeams, setTableTeams] = useState<Team[]>(prepareSeasonTeams(baseTeams));
	const [fixtures, setFixtures] = useState<Fixture[]>(initialFixtures);
	const [results, setResults] = useState<Result[]>([]);
	const [currentRound, setCurrentRound] = useState(1);
	const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
	const [modalFilter, setModalFilter] = useState<"all" | "home" | "away" | "wins" | "draws" | "losses">("all");
	const [seasonStartMode, setSeasonStartMode] = useState<"fresh" | "snapshot">("fresh");
	const [showSeasonSettings, setShowSeasonSettings] = useState(false);

	const currentRoundFixtures = fixtures.filter(
		(fixture) => fixture.round === currentRound
	);

	const seasonComplete = currentRound > 38;
	const playedMatches = fixtures.filter((fixture) => fixture.played).length;
	const remainingRounds = seasonComplete ? 0 : 39 - currentRound;

	const selectedTeam = selectedTeamId
		? tableTeams.find((team) => team.id === selectedTeamId) ?? null
		: null;

	// const selectedTeamResults = selectedTeamId
	// 	? results.filter(
	// 		(result) =>
	// 			result.homeTeamId === selectedTeamId ||
	// 			result.awayTeamId === selectedTeamId
	// 	)
	// 	: [];

	const initializeSeason = (mode: "fresh" | "snapshot") => {
		const freshTeams = prepareSeasonTeams(baseTeams);
		const allFixtures = generateFixtures(baseTeams);

		if (mode === "fresh") {
			setTableTeams(freshTeams);
			setFixtures(allFixtures);
			setResults([]);
			setCurrentRound(1);
			setSelectedTeamId(null);
			setModalFilter("all");
			return;
		}

		// SNAPSHOT MODE
		const snapshotMap = new Map(
			currentSeasonSnapshot.table.map((t) => [t.teamId, t])
		);

		const snapshotTeams = freshTeams.map((team) => {
			const snap = snapshotMap.get(team.id);
			if (!snap) return team;

			return {
				...team,
				played: snap.played,
				won: snap.won,
				drawn: snap.drawn,
				lost: snap.lost,
				gf: snap.gf,
				ga: snap.ga,
				gd: snap.gd,
				points: snap.points,
			};
		});

		// const completedFixtureIds = new Set(
		// 	currentSeasonSnapshot.completedResults.map((r) => r.fixtureId)
		// );

		// const remainingFixtures = allFixtures.filter(
		// 	(f) => !completedFixtureIds.has(f.id)
		// );

		setTableTeams(sortTeamsTable(snapshotTeams));
		setFixtures(upcomingFixtures.map((fixture) => ({
			...fixture,
		})));
		setResults(currentSeasonSnapshot.completedResults);
		setCurrentRound(currentSeasonSnapshot.lastCompletedRound + 1);
		setSelectedTeamId(null);
		setModalFilter("all");
	};


	function handleResetSeason() {
		initializeSeason(seasonStartMode);
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
			updatedResults: [...roundResults, ...resultsState],
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

	const selectedTeamResult = useMemo(() => {
		if (!selectedTeamId) return [];

		return results
			.filter(
				(result) =>
					result.homeTeamId === selectedTeamId ||
					result.awayTeamId === selectedTeamId
			)
			.sort((a, b) => a.round - b.round);
	}, [results, selectedTeamId]);

	const resultsByRound = useMemo(() => {
		const grouped = new Map<number, Result[]>();

		for (const result of results) {
			const existing = grouped.get(result.round) ?? [];
			existing.push(result);
			grouped.set(result.round, existing);
		}

		return Array.from(grouped.entries()).sort((a, b) => b[0] - a[0]);
	}, [results]);


	const filteredSelectedTeamResults = useMemo(() => {
		return selectedTeamResult.filter((result) => {
			const isHome = result.homeTeamId === selectedTeamId;
			const outcome = getResultOutcome(result, selectedTeamId!);

			switch (modalFilter) {
				case "home":
					return isHome;
				case "away":
					return !isHome;
				case "wins":
					return outcome === "W";
				case "draws":
					return outcome === "D";
				case "losses":
					return outcome === "L";
				default:
					return true;
			}
		});
	}, [selectedTeamResult, modalFilter, selectedTeamId]);

	function sortTeamsTable(teams: Team[]) {
		return [...teams].sort((a, b) => {
			if (b.points !== a.points) return b.points - a.points;
			if (b.gd !== a.gd) {
				return b.gd - a.gd;
			}
			if (b.gf !== a.gf) return b.gf - a.gf;
			return a.name.localeCompare(b.name);
		});
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
							<div className="relative">
								<button
									type="button"
									onClick={() => setShowSeasonSettings((prev) => !prev)}
									className="rounded-xl bg-white px-3 py-2 font-medium text-slate-900 shadow hover:bg-slate-100"
								>
									Season Settings
								</button>

								{showSeasonSettings && (
									<div className="absolute right-0 top-full z-30 mt-2 w-[360px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
										<div className="mb-3">
											<h3 className="text-sm font-semibold text-slate-900">Season start mode</h3>
											<p className="text-xs text-slate-500">
												Default starts from zero games played. Snapshot mode starts from saved real-world standings and completed results.
											</p>
										</div>

										<div className="flex flex-wrap gap-2">
											<button
												type="button"
												onClick={() => {
													setSeasonStartMode("fresh");
													initializeSeason("fresh");
													setShowSeasonSettings(false);
												}}
												className={`rounded-full px-4 py-2 text-sm font-medium transition ${seasonStartMode === "fresh"
														? "bg-slate-900 text-white"
														: "bg-slate-100 text-slate-700 hover:bg-slate-200"
													}`}
											>
												From season start
											</button>

											<button
												type="button"
												onClick={() => {
													setSeasonStartMode("snapshot");
													initializeSeason("snapshot");
													setShowSeasonSettings(false);
												}}
												className={`rounded-full px-4 py-2 text-sm font-medium transition ${seasonStartMode === "snapshot"
														? "bg-slate-900 text-white"
														: "bg-slate-100 text-slate-700 hover:bg-slate-200"
													}`}
											>
												From current standings
											</button>
										</div>

										{seasonStartMode === "snapshot" && (
											<div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
												Uses a saved real-world snapshot as of{" "}
												<span className="font-semibold">{currentSeasonSnapshot.asOfDate}</span>.
												Only fixtures after this point are simulated.
											</div>
										)}
									</div>
								)}
							</div>
							<div className="flex flex-col gap-1">
								<span className="text-xs font-semibold uppercase tracking-wide text-emerald-100">
									Simulation Mode
								</span>

								<button
									onClick={handleModeToggle}
									className={`flex items-center gap-3 rounded-full px-3 py-2 transition ${mode === "chaos"
										? "bg-slate-900 text-white"
										: "bg-white text-slate-900"
										}`}
								>
									<span
										className={`text-sm font-semibold ${mode === "realistic" ? "text-emerald-700" : "text-slate-300"
											}`}
									>
										Realistic
									</span>

									<span
										className={`relative inline-flex h-7 w-14 items-center rounded-full transition ${mode === "chaos" ? "bg-red-500" : "bg-emerald-500"
											}`}
									>
										<span
											className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${mode === "chaos" ? "translate-x-8" : "translate-x-1"
												}`}
										/>
									</span>

									<span
										className={`text-sm font-semibold ${mode === "chaos" ? "text-red-300" : "text-slate-500"
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

				<section className="grid grid-cols-1 gap-6 xl:grid-cols-14">
					<div className="rounded-2xl bg-white p-4 shadow xl:col-span-7">
						<div className="mb-4 flex items-center justify-between">
							<h2 className="text-xl font-bold text-slate-900">
								Premier League Table
							</h2>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
								{seasonComplete ? "Season Complete" : `Round ${currentRound}`}
							</span>
						</div>

						<div className="mb-3 text-xs text-slate-500">
							Click any team row to view all of their results.
						</div>

						<div className="overflow-x-auto">
							<LeagueTable
								teams={tableTeams}
								seasonComplete={seasonComplete}
								selectedTeamId={selectedTeamId}
								onSelectTeam={(teamId) => { setModalFilter("all"); setSelectedTeamId(teamId === selectedTeamId ? null : teamId) }}
							/>
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

					<div className="rounded-2xl bg-white p-4 shadow xl:col-span-4">
						<div className="mb-4 flex items-center justify-between">
							<h2 className="text-xl font-bold text-slate-900">Recent Results</h2>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
								{playedMatches} played
							</span>
						</div>
						<div className="max-h-[900px] space-y-4 overflow-y-auto pr-1 text-sm text-slate-700">
							{results.length === 0 ? (
								<div className="rounded-xl border border-slate-200 p-3">
									No matches simulated yet
								</div>
							) : (
								resultsByRound.slice(0, 6).map(([round, roundResults]) => (
									<div key={`round-${round}`} className="space-y-2">
										<div className="sticky top-0 z-10 rounded-lg bg-slate-200 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-700">
											Gameweek {round}
										</div>

										{roundResults.map((result) => {
											const homeOutcome = getResultOutcome(result, result.homeTeamId);
											const awayOutcome = getResultOutcome(result, result.awayTeamId);

											return (
												<div
													key={result.fixtureId}
													className="rounded-xl border border-slate-200 p-3"
												>
													<div className="mb-2 flex items-center gap-3">
														<span className="flex h-7 min-w-[52px] items-center justify-center rounded-lg bg-emerald-50 text-xs font-bold text-emerald-700">
															GW-{result.round}
														</span>

														<div className="flex flex-1 items-center justify-between gap-2 text-black">
															<span
																className={`flex-1 rounded-md border px-2 py-1 font-medium ${getOutcomeClass(homeOutcome)}`}
															>
																{getTeamName(result.homeTeamId)}
															</span>

															<span className="whitespace-nowrap font-bold text-slate-900">
																{result.homeGoals} - {result.awayGoals}
															</span>

															<span
																className={`flex-1 rounded-md border px-2 py-1 text-right font-medium ${getOutcomeClass(awayOutcome)}`}
															>
																{getTeamName(result.awayTeamId)}
															</span>
														</div>
													</div>

													{getVisibleTagLabels(result.tags ?? []).length > 0 && (
														<div className="flex flex-wrap gap-2">
															{getVisibleTagLabels(result.tags ?? []).map((label, index) => (
																<span
																	key={`${result.fixtureId}-${label}-${index}`}
																	className={`rounded-full px-2 py-1 text-[11px] font-semibold ${getTagClass(label)}`}
																>
																	{label}
																</span>
															))}
														</div>
													)}
												</div>
											);
										})}
									</div>
								))
							)}
						</div>
					</div>
				</section>
			</div>

			{/*(Modal for displaying team results) -- start */}

			{selectedTeam && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
					<div className="w-full max-w-4xl rounded-2xl bg-white shadow-2xl">
						<div className="flex items-center justify-between border-b border-slate-200 p-4">
							<div>
								<h3 className="text-2xl font-bold text-slate-900">
									{selectedTeam.name} Results
								</h3>
								<p className="text-sm text-slate-500">
									{filteredSelectedTeamResults.length} of {selectedTeamResult.length} matches shown
								</p>
							</div>

							<button
								onClick={() => setSelectedTeamId(null)}
								className="rounded-xl bg-slate-100 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-200"
							>
								Close
							</button>
						</div>
						<div className="mt-4 px-4 bg-black/20 p-2.5 flex flex-wrap gap-3">
							{[
								["all", "All"],
								["home", "Home"],
								["away", "Away"],
								["wins", "Wins"],
								["draws", "Draws"],
								["losses", "Losses"],
							].map(([value, label]) => (
								<button
									key={value}
									onClick={() => setModalFilter(value as typeof modalFilter)}
									className={`rounded-full px-3 py-1 text-sm font-medium transition ${modalFilter === value
										? "bg-emerald-600 text-white"
										: "bg-slate-100 text-slate-700 hover:bg-slate-200"
										}`}
								>
									{label}
								</button>
							))}
						</div>
						<div className="max-h-[70vh] overflow-y-auto p-4">
							{filteredSelectedTeamResults.length === 0 ? (
								<div className="rounded-xl border border-slate-200 p-4 text-slate-600">
									No matches have been played yet for {selectedTeam.name}.
								</div>
							) : (
								<div className="space-y-3">
									{filteredSelectedTeamResults.map((result) => {
										const isHome = result.homeTeamId === selectedTeamId;
										const opponentId = isHome
											? result.awayTeamId
											: result.homeTeamId;
										const opponentName = getTeamName(opponentId);
										const outcome = getResultOutcome(result, selectedTeamId!);

										return (
											<div
												key={`modal-${result.fixtureId}`}
												className={`rounded-xl border p-3 ${getRowOutcomeClass(outcome)}`}
											>
												<div
													className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${outcome === "W"
														? "bg-emerald-500"
														: outcome === "D"
															? "bg-amber-500"
															: "bg-rose-500"
														}`}
												/>
												<div className="mb-2 flex items-center gap-3">
													<span className="flex h-7 min-w-[52px] items-center justify-center rounded-lg bg-emerald-50 text-xs font-bold text-emerald-700">
														GW-{result.round}
													</span>

													<span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
														{isHome ? "Home" : "Away"}
													</span>
												</div>

												<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-sm">
													<span
														className="flex-1 rounded-md border border-slate-300 bg-white/70 px-2 py-1 font-medium text-black"
													>
														{isHome ? selectedTeam.name : opponentName}
													</span>

													<span className="text-center text-base font-bold text-slate-900">
														{result.homeGoals} - {result.awayGoals}
													</span>

													<span
														className="flex-1 rounded-md border border-slate-300 bg-white/70 px-2 py-1 font-medium text-black"
													>
														{!isHome ? selectedTeam.name : opponentName}
													</span>
												</div>

												{getVisibleTagLabels(result.tags ?? []).length > 0 && (
													<div className="mt-3 flex flex-wrap gap-2">
														{getVisibleTagLabels(result.tags ?? []).map(
															(label, index) => (
																<span
																	key={`modal-${result.fixtureId}-${label}-${index}`}
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
										);
									})}
								</div>
							)}
						</div>
					</div>
				</div>
			)}

			{/*(Modal for displaying team results) -- end */}
		</main>
	);
}
