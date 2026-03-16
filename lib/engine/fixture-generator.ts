import { Fixture, Team } from "@/types/league";

export function generateFixtures(teams: Team[]): Fixture[] {
  if (teams.length % 2 !== 0) {
    throw new Error("Fixture generation requires an even number of teams.");
  }

  const teamIds = teams.map((team) => team.id);
  const totalTeams = teamIds.length;
  const roundsPerHalf = totalTeams - 1; // 19 for 20 teams
  const matchesPerRound = totalTeams / 2; // 10 for 20 teams

  const firstHalf: Fixture[] = [];
  let rotation = [...teamIds];

  for (let round = 0; round < roundsPerHalf; round++) {
    for (let i = 0; i < matchesPerRound; i++) {
      const home = rotation[i];
      const away = rotation[totalTeams - 1 - i];

      const shouldFlip = round % 2 === 1;
      const homeTeamId = shouldFlip ? away : home;
      const awayTeamId = shouldFlip ? home : away;

      firstHalf.push({
        id: `R${round + 1}-M${i + 1}`,
        round: round + 1,
        homeTeamId,
        awayTeamId,
        played: false,
        homeGoals: null,
        awayGoals: null,
      });
    }

    const fixed = rotation[0];
    const rest = rotation.slice(1);
    rest.unshift(rest.pop()!);
    rotation = [fixed, ...rest];
  }

  const secondHalf: Fixture[] = firstHalf.map((fixture, index) => ({
    id: `R${fixture.round + roundsPerHalf}-M${(index % matchesPerRound) + 1}`,
    round: fixture.round + roundsPerHalf,
    homeTeamId: fixture.awayTeamId,
    awayTeamId: fixture.homeTeamId,
    played: false,
    homeGoals: null,
    awayGoals: null,
  }));

  return [...firstHalf, ...secondHalf];
}
