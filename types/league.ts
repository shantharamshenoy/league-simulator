export type Team = {
  id: string;
  name: string;
  shortName: string;
  logo: string;

  ovr: number;
  att: number;
  mid: number;
  def: number;
  form: number[];
  seasonBoost: number;

  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
};

export type Fixture = {
  id: string;
  round: number;
  homeTeamId: string;
  awayTeamId: string;
  played: boolean;
  homeGoals: number | null;
  awayGoals: number | null;
};

export type ResultTag =
  | "HOME_SURVIVAL"
  | "AWAY_SURVIVAL"
  | "HOME_TITLE_PRESSURE"
  | "AWAY_TITLE_PRESSURE"
  | "RELEGATION_SIX_POINTER"
  | "TITLE_CLASH";

export type Result = {
  fixtureId: string;
  round: number;
  homeTeamId: string;
  awayTeamId: string;
  homeGoals: number;
  awayGoals: number;
  tags: ResultTag[];
};
