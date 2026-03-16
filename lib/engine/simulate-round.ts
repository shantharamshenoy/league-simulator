import { Fixture, Result, ResultTag, Team } from "@/types/league";

type SimulationMode = "chaos" | "realistic";

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function getFormPoints(form: number[]): number {
  return form.reduce((sum, value) => sum + value, 0);
}

function pushForm(team: Team, points: number) {
  team.form = [...team.form, points].slice(-5);
}

function sortTable(teams: Team[]): Team[] {
  return [...teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    if (b.won !== a.won) return b.won - a.won;
    return a.name.localeCompare(b.name);
  });
}

function getPositionMap(sortedTeams: Team[]): Record<string, number> {
  const map: Record<string, number> = {};
  sortedTeams.forEach((team, index) => {
    map[team.id] = index + 1;
  });
  return map;
}

function getRemainingFixtures(
  fixtures: Fixture[],
  teamId: string,
  currentRound: number
): number {
  return fixtures.filter(
    (fixture) =>
      !fixture.played &&
      fixture.round >= currentRound &&
      (fixture.homeTeamId === teamId || fixture.awayTeamId === teamId)
  ).length;
}

function getRunInIntensity(remaining: number): number {
  if (remaining > 10) return 0;
  if (remaining >= 7) return 0.35;
  if (remaining >= 4) return 0.65;
  return 1.0;
}

function getMatchTags(
  homePosition: number,
  awayPosition: number,
  homeRemaining: number,
  awayRemaining: number
): ResultTag[] {
  const tags: ResultTag[] = [];

  const homeRunIn = getRunInIntensity(homeRemaining);
  const awayRunIn = getRunInIntensity(awayRemaining);

  if (homeRunIn > 0 && homePosition >= 15) tags.push("HOME_SURVIVAL");
  if (awayRunIn > 0 && awayPosition >= 15) tags.push("AWAY_SURVIVAL");

  if (homeRunIn > 0 && homePosition <= 3) tags.push("HOME_TITLE_PRESSURE");
  if (awayRunIn > 0 && awayPosition <= 3) tags.push("AWAY_TITLE_PRESSURE");

  if (homeRunIn > 0 && awayRunIn > 0 && homePosition >= 15 && awayPosition >= 15) {
    tags.push("RELEGATION_SIX_POINTER");
  }

  if (homeRunIn > 0 && awayRunIn > 0 && homePosition <= 3 && awayPosition <= 3) {
    tags.push("TITLE_CLASH");
  }

  return tags;
}

function applyRealisticLateSeasonModifiers(
  homeExpected: number,
  awayExpected: number,
  tags: ResultTag[],
  homePosition: number,
  awayPosition: number,
  homeRemaining: number,
  awayRemaining: number
) {
  let nextHome = homeExpected;
  let nextAway = awayExpected;

  const homeRunIn = getRunInIntensity(homeRemaining);
  const awayRunIn = getRunInIntensity(awayRemaining);

  if (tags.includes("HOME_SURVIVAL")) {
    const level = homePosition >= 18 ? 1 : 0.6;
    nextHome += 0.1 * homeRunIn * level;
    nextAway -= 0.04 * homeRunIn * level;
  }

  if (tags.includes("AWAY_SURVIVAL")) {
    const level = awayPosition >= 18 ? 1 : 0.6;
    nextAway += 0.1 * awayRunIn * level;
    nextHome -= 0.04 * awayRunIn * level;
  }

  if (tags.includes("HOME_TITLE_PRESSURE")) {
    const rankWeight = homePosition === 1 ? 1 : homePosition === 2 ? 0.75 : 0.5;
    nextHome -= 0.08 * homeRunIn * rankWeight;
    nextAway += 0.03 * homeRunIn * rankWeight;
  }

  if (tags.includes("AWAY_TITLE_PRESSURE")) {
    const rankWeight = awayPosition === 1 ? 1 : awayPosition === 2 ? 0.75 : 0.5;
    nextAway -= 0.08 * awayRunIn * rankWeight;
    nextHome += 0.03 * awayRunIn * rankWeight;
  }

  if (tags.includes("RELEGATION_SIX_POINTER")) {
    nextHome += 0.06;
    nextAway += 0.06;
  }

  if (tags.includes("TITLE_CLASH")) {
    nextHome -= 0.04;
    nextAway -= 0.04;
  }

  return {
    homeExpected: clamp(nextHome, 0.2, 4.8),
    awayExpected: clamp(nextAway, 0.1, 4.4),
  };
}

function pickWeightedScore<T extends [number, number]>(
  options: Array<{ score: T; weight: number }>
): T {
  const total = options.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;

  for (const item of options) {
    roll -= item.weight;
    if (roll <= 0) return item.score;
  }

  return options[options.length - 1].score;
}

function realisticScoreFromExpected(
  homeExpected: number,
  awayExpected: number
): { homeGoals: number; awayGoals: number } {
  const totalExpected = homeExpected + awayExpected;
  const edge = homeExpected - awayExpected;

  if (totalExpected < 1.9) {
    const score = pickWeightedScore([
      { score: [1, 0] as [number, number], weight: edge > 0 ? 20 : 10 },
      { score: [0, 1] as [number, number], weight: edge < 0 ? 20 : 10 },
      { score: [1, 1] as [number, number], weight: 16 },
      { score: [0, 0] as [number, number], weight: 10 },
      { score: [2, 0] as [number, number], weight: edge > 0.4 ? 10 : 4 },
      { score: [0, 2] as [number, number], weight: edge < -0.4 ? 10 : 4 },
      { score: [2, 1] as [number, number], weight: edge > 0.6 ? 5 : 2 },
      { score: [1, 2] as [number, number], weight: edge < -0.6 ? 5 : 2 },
    ]);
    return { homeGoals: score[0], awayGoals: score[1] };
  }

  if (totalExpected < 3.0) {
    const score = pickWeightedScore([
      { score: [1, 0] as [number, number], weight: edge > 0 ? 18 : 7 },
      { score: [0, 1] as [number, number], weight: edge < 0 ? 18 : 7 },
      { score: [2, 0] as [number, number], weight: edge > 0.35 ? 16 : 7 },
      { score: [0, 2] as [number, number], weight: edge < -0.35 ? 16 : 7 },
      { score: [2, 1] as [number, number], weight: edge > 0 ? 18 : 8 },
      { score: [1, 2] as [number, number], weight: edge < 0 ? 18 : 8 },
      { score: [1, 1] as [number, number], weight: 16 },
      { score: [2, 2] as [number, number], weight: 6 },
      { score: [3, 1] as [number, number], weight: edge > 0.8 ? 8 : 3 },
      { score: [1, 3] as [number, number], weight: edge < -0.8 ? 8 : 3 },
      { score: [3, 0] as [number, number], weight: edge > 1.0 ? 5 : 2 },
      { score: [0, 3] as [number, number], weight: edge < -1.0 ? 5 : 2 },
      { score: [0, 0] as [number, number], weight: 4 },
    ]);
    return { homeGoals: score[0], awayGoals: score[1] };
  }

  const score = pickWeightedScore([
    { score: [2, 1] as [number, number], weight: edge > 0 ? 18 : 8 },
    { score: [1, 2] as [number, number], weight: edge < 0 ? 18 : 8 },
    { score: [2, 0] as [number, number], weight: edge > 0.3 ? 16 : 7 },
    { score: [0, 2] as [number, number], weight: edge < -0.3 ? 16 : 7 },
    { score: [3, 1] as [number, number], weight: edge > 0.5 ? 16 : 7 },
    { score: [1, 3] as [number, number], weight: edge < -0.5 ? 16 : 7 },
    { score: [3, 0] as [number, number], weight: edge > 0.9 ? 10 : 4 },
    { score: [0, 3] as [number, number], weight: edge < -0.9 ? 10 : 4 },
    { score: [2, 2] as [number, number], weight: 8 },
    { score: [3, 2] as [number, number], weight: edge > 0.2 ? 10 : 5 },
    { score: [2, 3] as [number, number], weight: edge < -0.2 ? 10 : 5 },
    { score: [4, 1] as [number, number], weight: edge > 1.2 ? 6 : 2 },
    { score: [1, 4] as [number, number], weight: edge < -1.2 ? 6 : 2 },
    { score: [4, 0] as [number, number], weight: edge > 1.4 ? 4 : 1 },
    { score: [0, 4] as [number, number], weight: edge < -1.4 ? 4 : 1 },
    { score: [1, 1] as [number, number], weight: 5 },
  ]);

  return { homeGoals: score[0], awayGoals: score[1] };
}

function maybeApplyBigScoreOverride(
  homeTeam: Team,
  awayTeam: Team,
  homeExpected: number,
  awayExpected: number,
  currentScore: { homeGoals: number; awayGoals: number }
): { homeGoals: number; awayGoals: number } {
  const homeForm = getFormPoints(homeTeam.form);
  const awayForm = getFormPoints(awayTeam.form);
  const formDelta = homeForm - awayForm;
  const expectedDelta = homeExpected - awayExpected;

  const homeBlowoutChance =
    (expectedDelta > 1.15 ? 0.08 : 0) +
    (expectedDelta > 1.45 ? 0.06 : 0) +
    (formDelta >= 7 ? 0.05 : 0) +
    (formDelta >= 10 ? 0.05 : 0) +
    (awayForm <= 2 ? 0.04 : 0);

  const awayBlowoutChance =
    (expectedDelta < -1.15 ? 0.08 : 0) +
    (expectedDelta < -1.45 ? 0.06 : 0) +
    (formDelta <= -7 ? 0.05 : 0) +
    (formDelta <= -10 ? 0.05 : 0) +
    (homeForm <= 2 ? 0.04 : 0);

  const currentMargin = Math.abs(currentScore.homeGoals - currentScore.awayGoals);
  if (currentMargin >= 3) return currentScore;

  if (Math.random() < homeBlowoutChance) {
    const score = pickWeightedScore([
      { score: [4, 0] as [number, number], weight: 18 },
      { score: [4, 1] as [number, number], weight: 22 },
      { score: [5, 0] as [number, number], weight: 10 },
      { score: [5, 1] as [number, number], weight: 14 },
      { score: [6, 1] as [number, number], weight: 5 },
      { score: [4, 2] as [number, number], weight: 10 },
    ]);
    return { homeGoals: score[0], awayGoals: score[1] };
  }

  if (Math.random() < awayBlowoutChance) {
    const score = pickWeightedScore([
      { score: [0, 4] as [number, number], weight: 18 },
      { score: [1, 4] as [number, number], weight: 22 },
      { score: [0, 5] as [number, number], weight: 10 },
      { score: [1, 5] as [number, number], weight: 14 },
      { score: [1, 6] as [number, number], weight: 5 },
      { score: [2, 4] as [number, number], weight: 10 },
    ]);
    return { homeGoals: score[0], awayGoals: score[1] };
  }

  return currentScore;
}

function maybeApplyLegendaryOverride(
  mode: SimulationMode,
  currentScore: { homeGoals: number; awayGoals: number }
): { homeGoals: number; awayGoals: number } {
  if (mode === "chaos") {
    const legendaryChance = 0.02;
    if (Math.random() < legendaryChance) {
      const score = pickWeightedScore([
        { score: [7, 0] as [number, number], weight: 14 },
        { score: [0, 7] as [number, number], weight: 14 },
        { score: [8, 1] as [number, number], weight: 8 },
        { score: [1, 8] as [number, number], weight: 8 },
        { score: [7, 1] as [number, number], weight: 10 },
        { score: [1, 7] as [number, number], weight: 10 },
        { score: [6, 0] as [number, number], weight: 12 },
        { score: [0, 6] as [number, number], weight: 12 },
        { score: [6, 6] as [number, number], weight: 5 },
        { score: [7, 7] as [number, number], weight: 2 },
        { score: [5, 5] as [number, number], weight: 5 },
      ]);
      return { homeGoals: score[0], awayGoals: score[1] };
    }
    return currentScore;
  }

  const ultraRareChance = 0.001;
  if (Math.random() < ultraRareChance) {
    const score = pickWeightedScore([
      { score: [7, 0] as [number, number], weight: 18 },
      { score: [0, 7] as [number, number], weight: 18 },
      { score: [6, 1] as [number, number], weight: 18 },
      { score: [1, 6] as [number, number], weight: 18 },
      { score: [5, 5] as [number, number], weight: 6 },
      { score: [6, 6] as [number, number], weight: 2 },
      { score: [8, 1] as [number, number], weight: 3 },
      { score: [1, 8] as [number, number], weight: 3 },
    ]);
    return { homeGoals: score[0], awayGoals: score[1] };
  }

  return currentScore;
}

function applyExpectedGoalNoise(expected: number, mode: SimulationMode): number {
  const noise = mode === "chaos" ? 0.45 : 0.14;
  return clamp(expected + (Math.random() - 0.5) * noise, 0.1, 4.8);
}

function getRealisticGoals(
  homeTeam: Team,
  awayTeam: Team,
  tags: ResultTag[],
  homePosition: number,
  awayPosition: number,
  homeRemaining: number,
  awayRemaining: number
) {
  const homeForm = getFormPoints(homeTeam.form);
  const awayForm = getFormPoints(awayTeam.form);
  const formDelta = homeForm - awayForm;

  const homeAttackVsDefense = homeTeam.att - awayTeam.def;
  const awayAttackVsDefense = awayTeam.att - homeTeam.def;
  const midfieldDelta = homeTeam.mid - awayTeam.mid;
  const overallDelta = homeTeam.ovr - awayTeam.ovr;
  const seasonDelta = homeTeam.seasonBoost - awayTeam.seasonBoost;

  const homeEliteBonus =
    homeTeam.ovr >= 86 && homeTeam.att >= 86 && homeForm >= 7 ? 0.12 : 0;

  const awayEliteBonus =
    awayTeam.ovr >= 86 && awayTeam.att >= 86 && awayForm >= 7 ? 0.12 : 0;

  const homeExpectedBase =
    1.45 +
    homeAttackVsDefense * 0.095 +
    midfieldDelta * 0.045 +
    overallDelta * 0.038 +
    seasonDelta * 0.08 +
    formDelta * 0.055 +
    0.28 +
    homeEliteBonus;

  const awayExpectedBase =
    1.08 +
    awayAttackVsDefense * 0.09 -
    midfieldDelta * 0.03 -
    overallDelta * 0.024 -
    seasonDelta * 0.05 -
    formDelta * 0.042 +
    awayEliteBonus;

  let homeExpected = clamp(homeExpectedBase, 0.3, 4.9);
  let awayExpected = clamp(awayExpectedBase, 0.15, 4.4);

  const adjusted = applyRealisticLateSeasonModifiers(
    homeExpected,
    awayExpected,
    tags,
    homePosition,
    awayPosition,
    homeRemaining,
    awayRemaining
  );

  homeExpected = applyExpectedGoalNoise(adjusted.homeExpected, "realistic");
  awayExpected = applyExpectedGoalNoise(adjusted.awayExpected, "realistic");

  let score = realisticScoreFromExpected(homeExpected, awayExpected);
  score = maybeApplyBigScoreOverride(homeTeam, awayTeam, homeExpected, awayExpected, score);
  score = maybeApplyLegendaryOverride("realistic", score);

  return score;
}

function getChaosGoals(
  homeTeam: Team,
  awayTeam: Team,
  tags: ResultTag[]
) {
  const tinyHomeEdge = 0.08;
  const tinyRatingEdge = (homeTeam.ovr - awayTeam.ovr) * 0.01;

  let homeExpected = clamp(
    1.7 + tinyHomeEdge + tinyRatingEdge + (Math.random() - 0.5) * 1.2,
    0.1,
    4.5
  );
  let awayExpected = clamp(
    1.55 - tinyRatingEdge + (Math.random() - 0.5) * 1.2,
    0.1,
    4.5
  );

  if (tags.includes("HOME_SURVIVAL")) homeExpected += 0.14;
  if (tags.includes("AWAY_SURVIVAL")) awayExpected += 0.14;
  if (tags.includes("HOME_TITLE_PRESSURE")) homeExpected -= 0.08;
  if (tags.includes("AWAY_TITLE_PRESSURE")) awayExpected -= 0.08;
  if (tags.includes("RELEGATION_SIX_POINTER")) {
    homeExpected += 0.18;
    awayExpected += 0.18;
  }
  if (tags.includes("TITLE_CLASH")) {
    homeExpected += (Math.random() - 0.5) * 0.45;
    awayExpected += (Math.random() - 0.5) * 0.45;
  }

  homeExpected = applyExpectedGoalNoise(homeExpected, "chaos");
  awayExpected = applyExpectedGoalNoise(awayExpected, "chaos");

  let score = realisticScoreFromExpected(homeExpected, awayExpected);

  if (Math.random() < 0.18) {
    const wild = pickWeightedScore([
      { score: [4, 3] as [number, number], weight: 12 },
      { score: [3, 4] as [number, number], weight: 12 },
      { score: [5, 2] as [number, number], weight: 10 },
      { score: [2, 5] as [number, number], weight: 10 },
      { score: [4, 0] as [number, number], weight: 8 },
      { score: [0, 4] as [number, number], weight: 8 },
      { score: [5, 1] as [number, number], weight: 7 },
      { score: [1, 5] as [number, number], weight: 7 },
      { score: [6, 2] as [number, number], weight: 4 },
      { score: [2, 6] as [number, number], weight: 4 },
    ]);
    score = { homeGoals: wild[0], awayGoals: wild[1] };
  }

  score = maybeApplyLegendaryOverride("chaos", score);

  return score;
}

function getGoals(
  homeTeam: Team,
  awayTeam: Team,
  mode: SimulationMode,
  tags: ResultTag[],
  homePosition: number,
  awayPosition: number,
  homeRemaining: number,
  awayRemaining: number
): { homeGoals: number; awayGoals: number } {
  return mode === "chaos"
    ? getChaosGoals(homeTeam, awayTeam, tags)
    : getRealisticGoals(
        homeTeam,
        awayTeam,
        tags,
        homePosition,
        awayPosition,
        homeRemaining,
        awayRemaining
      );
}

export function simulateRound(
  teams: Team[],
  fixtures: Fixture[],
  currentRound: number,
  mode: SimulationMode
): {
  updatedTeams: Team[];
  updatedFixtures: Fixture[];
  roundResults: Result[];
} {
  const updatedTeams = teams.map((team) => ({
    ...team,
    form: [...team.form],
  }));

  const updatedFixtures = fixtures.map((fixture) => ({ ...fixture }));
  const roundResults: Result[] = [];

  const roundFixtures = updatedFixtures.filter(
    (fixture) => fixture.round === currentRound && !fixture.played
  );

  for (const fixture of roundFixtures) {
    const sortedBeforeMatch = sortTable(updatedTeams);
    const positionMap = getPositionMap(sortedBeforeMatch);

    const homeTeam = updatedTeams.find((team) => team.id === fixture.homeTeamId);
    const awayTeam = updatedTeams.find((team) => team.id === fixture.awayTeamId);

    if (!homeTeam || !awayTeam) continue;

    const homePosition = positionMap[homeTeam.id];
    const awayPosition = positionMap[awayTeam.id];
    const homeRemaining = getRemainingFixtures(updatedFixtures, homeTeam.id, currentRound);
    const awayRemaining = getRemainingFixtures(updatedFixtures, awayTeam.id, currentRound);

    const tags = getMatchTags(
      homePosition,
      awayPosition,
      homeRemaining,
      awayRemaining
    );

    const { homeGoals, awayGoals } = getGoals(
      homeTeam,
      awayTeam,
      mode,
      tags,
      homePosition,
      awayPosition,
      homeRemaining,
      awayRemaining
    );

    fixture.played = true;
    fixture.homeGoals = homeGoals;
    fixture.awayGoals = awayGoals;

    homeTeam.played += 1;
    awayTeam.played += 1;

    homeTeam.gf += homeGoals;
    homeTeam.ga += awayGoals;
    awayTeam.gf += awayGoals;
    awayTeam.ga += homeGoals;

    homeTeam.gd = homeTeam.gf - homeTeam.ga;
    awayTeam.gd = awayTeam.gf - awayTeam.ga;

    if (homeGoals > awayGoals) {
      homeTeam.won += 1;
      awayTeam.lost += 1;
      homeTeam.points += 3;

      pushForm(homeTeam, 3);
      pushForm(awayTeam, 0);
    } else if (awayGoals > homeGoals) {
      awayTeam.won += 1;
      homeTeam.lost += 1;
      awayTeam.points += 3;

      pushForm(homeTeam, 0);
      pushForm(awayTeam, 3);
    } else {
      homeTeam.drawn += 1;
      awayTeam.drawn += 1;
      homeTeam.points += 1;
      awayTeam.points += 1;

      pushForm(homeTeam, 1);
      pushForm(awayTeam, 1);
    }

    roundResults.push({
      fixtureId: fixture.id,
      round: fixture.round,
      homeTeamId: fixture.homeTeamId,
      awayTeamId: fixture.awayTeamId,
      homeGoals,
      awayGoals,
      tags,
    });
  }

  return {
    updatedTeams: sortTable(updatedTeams),
    updatedFixtures,
    roundResults,
  };
}
