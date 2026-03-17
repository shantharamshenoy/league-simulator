export type TeamSnapshot = {
	teamId: string;
	played: number;
	won: number;
	drawn: number;
	lost: number;
	gf: number;
	ga: number;
	gd: number;
	points: number;
};

export type SnapshotResult = {
	fixtureId: string;
	round: number;
	homeTeamId: string;
	awayTeamId: string;
	homeGoals: number;
	awayGoals: number;
	tags: [];
	source: "real";
};

export type ResultTag = "REAL";

export type CurrentSeasonSnapshot = {
	label: string;
	asOfDate: string;
	lastCompletedRound: number;
	table: TeamSnapshot[];
	completedResults: SnapshotResult[];
};

/*

This file contains a snapshot of the current season's standings and results, which can be used to initialize the league state when the app is first loaded. The data should be updated periodically to reflect the latest standings and results from the real world.id: "ars",
id: "avl",
id: "bou",
id: "bre",
id: "bha",
id: "bur",
id: "che",
id: "cry",
id: "eve",
id: "ful",
id: "lee",
id: "liv",
id: "mci",
id: "mun",
id: "new",
id: "nfo",
id: "sun",
id: "tot",
id: "whu",
id: "wol",

*/

export const currentSeasonSnapshot: CurrentSeasonSnapshot = {
	label: "Premier League current standings",
	asOfDate: "2026-03-18",
	lastCompletedRound: 30,
	table: [
		{
			teamId: "ars",
			played: 31,
			won: 21,
			drawn: 7,
			lost: 3,
			gf: 61,
			ga: 22,
			gd: 39,
			points: 70,
		},
		{
			teamId: "avl",
			played: 30,
			won: 15,
			drawn: 6,
			lost: 9,
			gf: 40,
			ga: 37,
			gd: 3,
			points: 51,
		},
		{
			teamId: "bou",
			played: 30,
			won: 9,
			drawn: 14,
			lost: 7,
			gf: 44,
			ga: 46,
			gd: 2,
			points: 41,
		},
		{
			teamId: "bre",
			played: 30,
			won: 13,
			drawn: 6,
			lost: 11,
			gf: 46,
			ga: 42,
			gd: 4,
			points: 45,
		},
		{
			teamId: "bha",
			played: 30,
			won: 10,
			drawn: 10,
			lost: 10,
			gf: 39,
			ga: 36,
			gd: 3,
			points: 40,
		},
		{
			teamId: "bur",
			played: 30,
			won: 4,
			drawn: 8,
			lost: 18,
			gf: 32,
			ga: 58,
			gd: -26,
			points: 20,
		},
		{
			teamId: "che",
			played: 30,
			won: 13,
			drawn: 9,
			lost: 8,
			gf: 53,
			ga: 35,
			gd: 18,
			points: 48,
		},
		{
			teamId: "cry",
			played: 30,
			won: 10,
			drawn: 9,
			lost: 11,
			gf: 33,
			ga: 35,
			gd: -2,
			points: 39,
		},
		{
			teamId: "eve",
			played: 30,
			won: 12,
			drawn: 7,
			lost: 11,
			gf: 34,
			ga: 35,
			gd: -1,
			points: 43,
		},
		{
			teamId: "ful",
			played: 30,
			won: 12,
			drawn: 5,
			lost: 13,
			gf: 40,
			ga: 43,
			gd: -3,
			points: 41,
		},
		{
			teamId: "lee",
			played: 30,
			won: 7,
			drawn: 11,
			lost: 12,
			gf: 37,
			ga: 48,
			gd: -11,
			points: 32,
		},
		{
			teamId: "liv",
			played: 30,
			won: 14,
			drawn: 7,
			lost: 9,
			gf: 49,
			ga: 40,
			gd: 9,
			points: 49,
		},
		{
			teamId: "mci",
			played: 30,
			won: 18,
			drawn: 7,
			lost: 5,
			gf: 60,
			ga: 28,
			gd: 32,
			points: 61,
		},
		{
			teamId: "mun",
			played: 30,
			won: 15,
			drawn: 9,
			lost: 6,
			gf: 54,
			ga: 41,
			gd: 13,
			points: 54,
		},
		{
			teamId: "new",
			played: 30,
			won: 12,
			drawn: 6,
			lost: 12,
			gf: 43,
			ga: 43,
			gd: 0,
			points: 42,
		},
		{
			teamId: "nfo",
			played: 30,
			won: 7,
			drawn: 8,
			lost: 15,
			gf: 28,
			ga: 43,
			gd: -15,
			points: 29,
		},
		{
			teamId: "sun",
			played: 30,
			won: 10,
			drawn: 10,
			lost: 10,
			gf: 30,
			ga: 35,
			gd: -5,
			points: 40,
		},
		{
			teamId: "tot",
			played: 30,
			won: 7,
			drawn: 9,
			lost: 14,
			gf: 40,
			ga: 47,
			gd: -7,
			points: 30,
		},
		{
			teamId: "whu",
			played: 30,
			won: 7,
			drawn: 8,
			lost: 15,
			gf: 36,
			ga: 55,
			gd: -19,
			points: 29,
		},
		{
			teamId: "wol",
			played: 31,
			won: 3,
			drawn: 8,
			lost: 20,
			gf: 24,
			ga: 54,
			gd: -30,
			points: 17,
		}
	],
	completedResults: [
		{
			"fixtureId": "gw1-liv-bou",
			"round": 1,
			"homeTeamId": "liv",
			"awayTeamId": "bou",
			"homeGoals": 4,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw1-avl-new",
			"round": 1,
			"homeTeamId": "avl",
			"awayTeamId": "new",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw1-bha-ful",
			"round": 1,
			"homeTeamId": "bha",
			"awayTeamId": "ful",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw1-sun-whu",
			"round": 1,
			"homeTeamId": "sun",
			"awayTeamId": "whu",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw1-tot-bur",
			"round": 1,
			"homeTeamId": "tot",
			"awayTeamId": "bur",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw1-wol-mci",
			"round": 1,
			"homeTeamId": "wol",
			"awayTeamId": "mci",
			"homeGoals": 0,
			"awayGoals": 4,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw1-nfo-bre",
			"round": 1,
			"homeTeamId": "nfo",
			"awayTeamId": "bre",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw1-che-cry",
			"round": 1,
			"homeTeamId": "che",
			"awayTeamId": "cry",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw1-mun-ars",
			"round": 1,
			"homeTeamId": "mun",
			"awayTeamId": "ars",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw1-lee-eve",
			"round": 1,
			"homeTeamId": "lee",
			"awayTeamId": "eve",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw2-whu-che",
			"round": 2,
			"homeTeamId": "whu",
			"awayTeamId": "che",
			"homeGoals": 1,
			"awayGoals": 5,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw2-mci-tot",
			"round": 2,
			"homeTeamId": "mci",
			"awayTeamId": "tot",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw2-bou-wol",
			"round": 2,
			"homeTeamId": "bou",
			"awayTeamId": "wol",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw2-bre-avl",
			"round": 2,
			"homeTeamId": "bre",
			"awayTeamId": "avl",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw2-bur-sun",
			"round": 2,
			"homeTeamId": "bur",
			"awayTeamId": "sun",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw2-ars-lee",
			"round": 2,
			"homeTeamId": "ars",
			"awayTeamId": "lee",
			"homeGoals": 5,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw2-cry-nfo",
			"round": 2,
			"homeTeamId": "cry",
			"awayTeamId": "nfo",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw2-eve-bha",
			"round": 2,
			"homeTeamId": "eve",
			"awayTeamId": "bha",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw2-ful-mun",
			"round": 2,
			"homeTeamId": "ful",
			"awayTeamId": "mun",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw2-new-liv",
			"round": 2,
			"homeTeamId": "new",
			"awayTeamId": "liv",
			"homeGoals": 2,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw3-che-ful",
			"round": 3,
			"homeTeamId": "che",
			"awayTeamId": "ful",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw3-mun-bur",
			"round": 3,
			"homeTeamId": "mun",
			"awayTeamId": "bur",
			"homeGoals": 3,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw3-sun-bre",
			"round": 3,
			"homeTeamId": "sun",
			"awayTeamId": "bre",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw3-tot-bou",
			"round": 3,
			"homeTeamId": "tot",
			"awayTeamId": "bou",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw3-wol-eve",
			"round": 3,
			"homeTeamId": "wol",
			"awayTeamId": "eve",
			"homeGoals": 2,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw3-lee-new",
			"round": 3,
			"homeTeamId": "lee",
			"awayTeamId": "new",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw3-bha-mci",
			"round": 3,
			"homeTeamId": "bha",
			"awayTeamId": "mci",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw3-nfo-whu",
			"round": 3,
			"homeTeamId": "nfo",
			"awayTeamId": "whu",
			"homeGoals": 0,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw3-liv-ars",
			"round": 3,
			"homeTeamId": "liv",
			"awayTeamId": "ars",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw3-avl-cry",
			"round": 3,
			"homeTeamId": "avl",
			"awayTeamId": "cry",
			"homeGoals": 0,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw4-ars-nfo",
			"round": 4,
			"homeTeamId": "ars",
			"awayTeamId": "nfo",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw4-bou-bha",
			"round": 4,
			"homeTeamId": "bou",
			"awayTeamId": "bha",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw4-cry-sun",
			"round": 4,
			"homeTeamId": "cry",
			"awayTeamId": "sun",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw4-eve-avl",
			"round": 4,
			"homeTeamId": "eve",
			"awayTeamId": "avl",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw4-ful-lee",
			"round": 4,
			"homeTeamId": "ful",
			"awayTeamId": "lee",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw4-new-wol",
			"round": 4,
			"homeTeamId": "new",
			"awayTeamId": "wol",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw4-whu-tot",
			"round": 4,
			"homeTeamId": "whu",
			"awayTeamId": "tot",
			"homeGoals": 0,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw4-bre-che",
			"round": 4,
			"homeTeamId": "bre",
			"awayTeamId": "che",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw4-bur-liv",
			"round": 4,
			"homeTeamId": "bur",
			"awayTeamId": "liv",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw4-mci-mun",
			"round": 4,
			"homeTeamId": "mci",
			"awayTeamId": "mun",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw5-liv-eve",
			"round": 5,
			"homeTeamId": "liv",
			"awayTeamId": "eve",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw5-bha-tot",
			"round": 5,
			"homeTeamId": "bha",
			"awayTeamId": "tot",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw5-bur-nfo",
			"round": 5,
			"homeTeamId": "bur",
			"awayTeamId": "nfo",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw5-whu-cry",
			"round": 5,
			"homeTeamId": "whu",
			"awayTeamId": "cry",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw5-wol-lee",
			"round": 5,
			"homeTeamId": "wol",
			"awayTeamId": "lee",
			"homeGoals": 1,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw5-mun-che",
			"round": 5,
			"homeTeamId": "mun",
			"awayTeamId": "che",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw5-ful-bre",
			"round": 5,
			"homeTeamId": "ful",
			"awayTeamId": "bre",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw5-bou-new",
			"round": 5,
			"homeTeamId": "bou",
			"awayTeamId": "new",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw5-sun-avl",
			"round": 5,
			"homeTeamId": "sun",
			"awayTeamId": "avl",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw5-ars-mci",
			"round": 5,
			"homeTeamId": "ars",
			"awayTeamId": "mci",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw6-bre-mun",
			"round": 6,
			"homeTeamId": "bre",
			"awayTeamId": "mun",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw6-che-bha",
			"round": 6,
			"homeTeamId": "che",
			"awayTeamId": "bha",
			"homeGoals": 1,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw6-cry-liv",
			"round": 6,
			"homeTeamId": "cry",
			"awayTeamId": "liv",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw6-lee-bou",
			"round": 6,
			"homeTeamId": "lee",
			"awayTeamId": "bou",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw6-mci-bur",
			"round": 6,
			"homeTeamId": "mci",
			"awayTeamId": "bur",
			"homeGoals": 5,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw6-nfo-sun",
			"round": 6,
			"homeTeamId": "nfo",
			"awayTeamId": "sun",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw6-tot-wol",
			"round": 6,
			"homeTeamId": "tot",
			"awayTeamId": "wol",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw6-avl-ful",
			"round": 6,
			"homeTeamId": "avl",
			"awayTeamId": "ful",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw6-new-ars",
			"round": 6,
			"homeTeamId": "new",
			"awayTeamId": "ars",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw6-eve-whu",
			"round": 6,
			"homeTeamId": "eve",
			"awayTeamId": "whu",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw7-bou-ful",
			"round": 7,
			"homeTeamId": "bou",
			"awayTeamId": "ful",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw7-lee-tot",
			"round": 7,
			"homeTeamId": "lee",
			"awayTeamId": "tot",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw7-ars-whu",
			"round": 7,
			"homeTeamId": "ars",
			"awayTeamId": "whu",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw7-mun-sun",
			"round": 7,
			"homeTeamId": "mun",
			"awayTeamId": "sun",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw7-che-liv",
			"round": 7,
			"homeTeamId": "che",
			"awayTeamId": "liv",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw7-avl-bur",
			"round": 7,
			"homeTeamId": "avl",
			"awayTeamId": "bur",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw7-eve-cry",
			"round": 7,
			"homeTeamId": "eve",
			"awayTeamId": "cry",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw7-new-nfo",
			"round": 7,
			"homeTeamId": "new",
			"awayTeamId": "nfo",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw7-wol-bha",
			"round": 7,
			"homeTeamId": "wol",
			"awayTeamId": "bha",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw7-bre-mci",
			"round": 7,
			"homeTeamId": "bre",
			"awayTeamId": "mci",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw8-nfo-che",
			"round": 8,
			"homeTeamId": "nfo",
			"awayTeamId": "che",
			"homeGoals": 0,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw8-bha-new",
			"round": 8,
			"homeTeamId": "bha",
			"awayTeamId": "new",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw8-bur-lee",
			"round": 8,
			"homeTeamId": "bur",
			"awayTeamId": "lee",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw8-cry-bou",
			"round": 8,
			"homeTeamId": "cry",
			"awayTeamId": "bou",
			"homeGoals": 3,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw8-mci-eve",
			"round": 8,
			"homeTeamId": "mci",
			"awayTeamId": "eve",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw8-sun-wol",
			"round": 8,
			"homeTeamId": "sun",
			"awayTeamId": "wol",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw8-ful-ars",
			"round": 8,
			"homeTeamId": "ful",
			"awayTeamId": "ars",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw8-tot-avl",
			"round": 8,
			"homeTeamId": "tot",
			"awayTeamId": "avl",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw8-liv-mun",
			"round": 8,
			"homeTeamId": "liv",
			"awayTeamId": "mun",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw8-whu-bre",
			"round": 8,
			"homeTeamId": "whu",
			"awayTeamId": "bre",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw9-lee-whu",
			"round": 9,
			"homeTeamId": "lee",
			"awayTeamId": "whu",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw9-che-sun",
			"round": 9,
			"homeTeamId": "che",
			"awayTeamId": "sun",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw9-new-ful",
			"round": 9,
			"homeTeamId": "new",
			"awayTeamId": "ful",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw9-mun-bha",
			"round": 9,
			"homeTeamId": "mun",
			"awayTeamId": "bha",
			"homeGoals": 4,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw9-bre-liv",
			"round": 9,
			"homeTeamId": "bre",
			"awayTeamId": "liv",
			"homeGoals": 3,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw9-ars-cry",
			"round": 9,
			"homeTeamId": "ars",
			"awayTeamId": "cry",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw9-avl-mci",
			"round": 9,
			"homeTeamId": "avl",
			"awayTeamId": "mci",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw9-wol-bur",
			"round": 9,
			"homeTeamId": "wol",
			"awayTeamId": "bur",
			"homeGoals": 2,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw9-bou-nfo",
			"round": 9,
			"homeTeamId": "bou",
			"awayTeamId": "nfo",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw9-eve-tot",
			"round": 9,
			"homeTeamId": "eve",
			"awayTeamId": "tot",
			"homeGoals": 0,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw10-bha-lee",
			"round": 10,
			"homeTeamId": "bha",
			"awayTeamId": "lee",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw10-bur-ars",
			"round": 10,
			"homeTeamId": "bur",
			"awayTeamId": "ars",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw10-cry-bre",
			"round": 10,
			"homeTeamId": "cry",
			"awayTeamId": "bre",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw10-ful-wol",
			"round": 10,
			"homeTeamId": "ful",
			"awayTeamId": "wol",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw10-nfo-mun",
			"round": 10,
			"homeTeamId": "nfo",
			"awayTeamId": "mun",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw10-tot-che",
			"round": 10,
			"homeTeamId": "tot",
			"awayTeamId": "che",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw10-liv-avl",
			"round": 10,
			"homeTeamId": "liv",
			"awayTeamId": "avl",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw10-whu-new",
			"round": 10,
			"homeTeamId": "whu",
			"awayTeamId": "new",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw10-mci-bou",
			"round": 10,
			"homeTeamId": "mci",
			"awayTeamId": "bou",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw10-sun-eve",
			"round": 10,
			"homeTeamId": "sun",
			"awayTeamId": "eve",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw11-tot-mun",
			"round": 11,
			"homeTeamId": "tot",
			"awayTeamId": "mun",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw11-eve-ful",
			"round": 11,
			"homeTeamId": "eve",
			"awayTeamId": "ful",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw11-whu-bur",
			"round": 11,
			"homeTeamId": "whu",
			"awayTeamId": "bur",
			"homeGoals": 3,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw11-sun-ars",
			"round": 11,
			"homeTeamId": "sun",
			"awayTeamId": "ars",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw11-che-wol",
			"round": 11,
			"homeTeamId": "che",
			"awayTeamId": "wol",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw11-avl-bou",
			"round": 11,
			"homeTeamId": "avl",
			"awayTeamId": "bou",
			"homeGoals": 4,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw11-bre-new",
			"round": 11,
			"homeTeamId": "bre",
			"awayTeamId": "new",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw11-cry-bha",
			"round": 11,
			"homeTeamId": "cry",
			"awayTeamId": "bha",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw11-nfo-lee",
			"round": 11,
			"homeTeamId": "nfo",
			"awayTeamId": "lee",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw11-mci-liv",
			"round": 11,
			"homeTeamId": "mci",
			"awayTeamId": "liv",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw12-bur-che",
			"round": 12,
			"homeTeamId": "bur",
			"awayTeamId": "che",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw12-bou-whu",
			"round": 12,
			"homeTeamId": "bou",
			"awayTeamId": "whu",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw12-bha-bre",
			"round": 12,
			"homeTeamId": "bha",
			"awayTeamId": "bre",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw12-ful-sun",
			"round": 12,
			"homeTeamId": "ful",
			"awayTeamId": "sun",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw12-liv-nfo",
			"round": 12,
			"homeTeamId": "liv",
			"awayTeamId": "nfo",
			"homeGoals": 0,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw12-wol-cry",
			"round": 12,
			"homeTeamId": "wol",
			"awayTeamId": "cry",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw12-new-mci",
			"round": 12,
			"homeTeamId": "new",
			"awayTeamId": "mci",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw12-lee-avl",
			"round": 12,
			"homeTeamId": "lee",
			"awayTeamId": "avl",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw12-ars-tot",
			"round": 12,
			"homeTeamId": "ars",
			"awayTeamId": "tot",
			"homeGoals": 4,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw12-mun-eve",
			"round": 12,
			"homeTeamId": "mun",
			"awayTeamId": "eve",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw13-bre-bur",
			"round": 13,
			"homeTeamId": "bre",
			"awayTeamId": "bur",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw13-mci-lee",
			"round": 13,
			"homeTeamId": "mci",
			"awayTeamId": "lee",
			"homeGoals": 3,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw13-sun-bou",
			"round": 13,
			"homeTeamId": "sun",
			"awayTeamId": "bou",
			"homeGoals": 3,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw13-eve-new",
			"round": 13,
			"homeTeamId": "eve",
			"awayTeamId": "new",
			"homeGoals": 1,
			"awayGoals": 4,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw13-tot-ful",
			"round": 13,
			"homeTeamId": "tot",
			"awayTeamId": "ful",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw13-cry-mun",
			"round": 13,
			"homeTeamId": "cry",
			"awayTeamId": "mun",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw13-avl-wol",
			"round": 13,
			"homeTeamId": "avl",
			"awayTeamId": "wol",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw13-nfo-bha",
			"round": 13,
			"homeTeamId": "nfo",
			"awayTeamId": "bha",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw13-whu-liv",
			"round": 13,
			"homeTeamId": "whu",
			"awayTeamId": "liv",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw13-che-ars",
			"round": 13,
			"homeTeamId": "che",
			"awayTeamId": "ars",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw14-bou-eve",
			"round": 14,
			"homeTeamId": "bou",
			"awayTeamId": "eve",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw14-ful-mci",
			"round": 14,
			"homeTeamId": "ful",
			"awayTeamId": "mci",
			"homeGoals": 4,
			"awayGoals": 5,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw14-new-tot",
			"round": 14,
			"homeTeamId": "new",
			"awayTeamId": "tot",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw14-ars-bre",
			"round": 14,
			"homeTeamId": "ars",
			"awayTeamId": "bre",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw14-bha-avl",
			"round": 14,
			"homeTeamId": "bha",
			"awayTeamId": "avl",
			"homeGoals": 3,
			"awayGoals": 4,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw14-bur-cry",
			"round": 14,
			"homeTeamId": "bur",
			"awayTeamId": "cry",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw14-wol-nfo",
			"round": 14,
			"homeTeamId": "wol",
			"awayTeamId": "nfo",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw14-lee-che",
			"round": 14,
			"homeTeamId": "lee",
			"awayTeamId": "che",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw14-liv-sun",
			"round": 14,
			"homeTeamId": "liv",
			"awayTeamId": "sun",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw14-mun-whu",
			"round": 14,
			"homeTeamId": "mun",
			"awayTeamId": "whu",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw15-avl-ars",
			"round": 15,
			"homeTeamId": "avl",
			"awayTeamId": "ars",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw15-bou-che",
			"round": 15,
			"homeTeamId": "bou",
			"awayTeamId": "che",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw15-eve-nfo",
			"round": 15,
			"homeTeamId": "eve",
			"awayTeamId": "nfo",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw15-mci-sun",
			"round": 15,
			"homeTeamId": "mci",
			"awayTeamId": "sun",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw15-new-bur",
			"round": 15,
			"homeTeamId": "new",
			"awayTeamId": "bur",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw15-tot-bre",
			"round": 15,
			"homeTeamId": "tot",
			"awayTeamId": "bre",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw15-lee-liv",
			"round": 15,
			"homeTeamId": "lee",
			"awayTeamId": "liv",
			"homeGoals": 3,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw15-bha-whu",
			"round": 15,
			"homeTeamId": "bha",
			"awayTeamId": "whu",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw15-ful-cry",
			"round": 15,
			"homeTeamId": "ful",
			"awayTeamId": "cry",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw15-wol-mun",
			"round": 15,
			"homeTeamId": "wol",
			"awayTeamId": "mun",
			"homeGoals": 1,
			"awayGoals": 4,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw16-che-eve",
			"round": 16,
			"homeTeamId": "che",
			"awayTeamId": "eve",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw16-liv-bha",
			"round": 16,
			"homeTeamId": "liv",
			"awayTeamId": "bha",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw16-bur-ful",
			"round": 16,
			"homeTeamId": "bur",
			"awayTeamId": "ful",
			"homeGoals": 2,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw16-ars-wol",
			"round": 16,
			"homeTeamId": "ars",
			"awayTeamId": "wol",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw16-cry-mci",
			"round": 16,
			"homeTeamId": "cry",
			"awayTeamId": "mci",
			"homeGoals": 0,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw16-nfo-tot",
			"round": 16,
			"homeTeamId": "nfo",
			"awayTeamId": "tot",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw16-sun-new",
			"round": 16,
			"homeTeamId": "sun",
			"awayTeamId": "new",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw16-whu-avl",
			"round": 16,
			"homeTeamId": "whu",
			"awayTeamId": "avl",
			"homeGoals": 2,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw16-bre-lee",
			"round": 16,
			"homeTeamId": "bre",
			"awayTeamId": "lee",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw16-mun-bou",
			"round": 16,
			"homeTeamId": "mun",
			"awayTeamId": "bou",
			"homeGoals": 4,
			"awayGoals": 4,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw17-new-che",
			"round": 17,
			"homeTeamId": "new",
			"awayTeamId": "che",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw17-bou-bur",
			"round": 17,
			"homeTeamId": "bou",
			"awayTeamId": "bur",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw17-bha-sun",
			"round": 17,
			"homeTeamId": "bha",
			"awayTeamId": "sun",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw17-mci-whu",
			"round": 17,
			"homeTeamId": "mci",
			"awayTeamId": "whu",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw17-wol-bre",
			"round": 17,
			"homeTeamId": "wol",
			"awayTeamId": "bre",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw17-tot-liv",
			"round": 17,
			"homeTeamId": "tot",
			"awayTeamId": "liv",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw17-eve-ars",
			"round": 17,
			"homeTeamId": "eve",
			"awayTeamId": "ars",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw17-lee-cry",
			"round": 17,
			"homeTeamId": "lee",
			"awayTeamId": "cry",
			"homeGoals": 4,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw17-avl-mun",
			"round": 17,
			"homeTeamId": "avl",
			"awayTeamId": "mun",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw17-ful-nfo",
			"round": 17,
			"homeTeamId": "ful",
			"awayTeamId": "nfo",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw18-mun-new",
			"round": 18,
			"homeTeamId": "mun",
			"awayTeamId": "new",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw18-nfo-mci",
			"round": 18,
			"homeTeamId": "nfo",
			"awayTeamId": "mci",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw18-ars-bha",
			"round": 18,
			"homeTeamId": "ars",
			"awayTeamId": "bha",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw18-bre-bou",
			"round": 18,
			"homeTeamId": "bre",
			"awayTeamId": "bou",
			"homeGoals": 4,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw18-bur-eve",
			"round": 18,
			"homeTeamId": "bur",
			"awayTeamId": "eve",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw18-liv-wol",
			"round": 18,
			"homeTeamId": "liv",
			"awayTeamId": "wol",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw18-whu-ful",
			"round": 18,
			"homeTeamId": "whu",
			"awayTeamId": "ful",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw18-che-avl",
			"round": 18,
			"homeTeamId": "che",
			"awayTeamId": "avl",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw18-sun-lee",
			"round": 18,
			"homeTeamId": "sun",
			"awayTeamId": "lee",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw18-cry-tot",
			"round": 18,
			"homeTeamId": "cry",
			"awayTeamId": "tot",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw19-bur-new",
			"round": 19,
			"homeTeamId": "bur",
			"awayTeamId": "new",
			"homeGoals": 1,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw19-che-bou",
			"round": 19,
			"homeTeamId": "che",
			"awayTeamId": "bou",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw19-nfo-eve",
			"round": 19,
			"homeTeamId": "nfo",
			"awayTeamId": "eve",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw19-whu-bha",
			"round": 19,
			"homeTeamId": "whu",
			"awayTeamId": "bha",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw19-ars-avl",
			"round": 19,
			"homeTeamId": "ars",
			"awayTeamId": "avl",
			"homeGoals": 4,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw19-mun-wol",
			"round": 19,
			"homeTeamId": "mun",
			"awayTeamId": "wol",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw19-cry-ful",
			"round": 19,
			"homeTeamId": "cry",
			"awayTeamId": "ful",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw19-liv-lee",
			"round": 19,
			"homeTeamId": "liv",
			"awayTeamId": "lee",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw19-bre-tot",
			"round": 19,
			"homeTeamId": "bre",
			"awayTeamId": "tot",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw19-sun-mci",
			"round": 19,
			"homeTeamId": "sun",
			"awayTeamId": "mci",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw20-avl-nfo",
			"round": 20,
			"homeTeamId": "avl",
			"awayTeamId": "nfo",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw20-bha-bur",
			"round": 20,
			"homeTeamId": "bha",
			"awayTeamId": "bur",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw20-wol-whu",
			"round": 20,
			"homeTeamId": "wol",
			"awayTeamId": "whu",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw20-bou-ars",
			"round": 20,
			"homeTeamId": "bou",
			"awayTeamId": "ars",
			"homeGoals": 2,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw20-lee-mun",
			"round": 20,
			"homeTeamId": "lee",
			"awayTeamId": "mun",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw20-eve-bre",
			"round": 20,
			"homeTeamId": "eve",
			"awayTeamId": "bre",
			"homeGoals": 2,
			"awayGoals": 4,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw20-new-cry",
			"round": 20,
			"homeTeamId": "new",
			"awayTeamId": "cry",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw20-tot-sun",
			"round": 20,
			"homeTeamId": "tot",
			"awayTeamId": "sun",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw20-ful-liv",
			"round": 20,
			"homeTeamId": "ful",
			"awayTeamId": "liv",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw20-mci-che",
			"round": 20,
			"homeTeamId": "mci",
			"awayTeamId": "che",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw21-whu-nfo",
			"round": 21,
			"homeTeamId": "whu",
			"awayTeamId": "nfo",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw21-bou-tot",
			"round": 21,
			"homeTeamId": "bou",
			"awayTeamId": "tot",
			"homeGoals": 3,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw21-bre-sun",
			"round": 21,
			"homeTeamId": "bre",
			"awayTeamId": "sun",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw21-cry-avl",
			"round": 21,
			"homeTeamId": "cry",
			"awayTeamId": "avl",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw21-eve-wol",
			"round": 21,
			"homeTeamId": "eve",
			"awayTeamId": "wol",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw21-ful-che",
			"round": 21,
			"homeTeamId": "ful",
			"awayTeamId": "che",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw21-mci-bha",
			"round": 21,
			"homeTeamId": "mci",
			"awayTeamId": "bha",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw21-bur-mun",
			"round": 21,
			"homeTeamId": "bur",
			"awayTeamId": "mun",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw21-new-lee",
			"round": 21,
			"homeTeamId": "new",
			"awayTeamId": "lee",
			"homeGoals": 4,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw21-ars-liv",
			"round": 21,
			"homeTeamId": "ars",
			"awayTeamId": "liv",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw22-mun-mci",
			"round": 22,
			"homeTeamId": "mun",
			"awayTeamId": "mci",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw22-che-bre",
			"round": 22,
			"homeTeamId": "che",
			"awayTeamId": "bre",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw22-lee-ful",
			"round": 22,
			"homeTeamId": "lee",
			"awayTeamId": "ful",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw22-liv-bur",
			"round": 22,
			"homeTeamId": "liv",
			"awayTeamId": "bur",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw22-sun-cry",
			"round": 22,
			"homeTeamId": "sun",
			"awayTeamId": "cry",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw22-tot-whu",
			"round": 22,
			"homeTeamId": "tot",
			"awayTeamId": "whu",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw22-nfo-ars",
			"round": 22,
			"homeTeamId": "nfo",
			"awayTeamId": "ars",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw22-wol-new",
			"round": 22,
			"homeTeamId": "wol",
			"awayTeamId": "new",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw22-avl-eve",
			"round": 22,
			"homeTeamId": "avl",
			"awayTeamId": "eve",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw22-bha-bou",
			"round": 22,
			"homeTeamId": "bha",
			"awayTeamId": "bou",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw23-whu-sun",
			"round": 23,
			"homeTeamId": "whu",
			"awayTeamId": "sun",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw23-bur-tot",
			"round": 23,
			"homeTeamId": "bur",
			"awayTeamId": "tot",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw23-ful-bha",
			"round": 23,
			"homeTeamId": "ful",
			"awayTeamId": "bha",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw23-mci-wol",
			"round": 23,
			"homeTeamId": "mci",
			"awayTeamId": "wol",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw23-bou-liv",
			"round": 23,
			"homeTeamId": "bou",
			"awayTeamId": "liv",
			"homeGoals": 3,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw23-bre-nfo",
			"round": 23,
			"homeTeamId": "bre",
			"awayTeamId": "nfo",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw23-cry-che",
			"round": 23,
			"homeTeamId": "cry",
			"awayTeamId": "che",
			"homeGoals": 1,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw23-new-avl",
			"round": 23,
			"homeTeamId": "new",
			"awayTeamId": "avl",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw23-ars-mun",
			"round": 23,
			"homeTeamId": "ars",
			"awayTeamId": "mun",
			"homeGoals": 2,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw23-eve-lee",
			"round": 23,
			"homeTeamId": "eve",
			"awayTeamId": "lee",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw24-bha-eve",
			"round": 24,
			"homeTeamId": "bha",
			"awayTeamId": "eve",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw24-lee-ars",
			"round": 24,
			"homeTeamId": "lee",
			"awayTeamId": "ars",
			"homeGoals": 0,
			"awayGoals": 4,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw24-wol-bou",
			"round": 24,
			"homeTeamId": "wol",
			"awayTeamId": "bou",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw24-che-whu",
			"round": 24,
			"homeTeamId": "che",
			"awayTeamId": "whu",
			"homeGoals": 3,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw24-liv-new",
			"round": 24,
			"homeTeamId": "liv",
			"awayTeamId": "new",
			"homeGoals": 4,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw24-avl-bre",
			"round": 24,
			"homeTeamId": "avl",
			"awayTeamId": "bre",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw24-mun-ful",
			"round": 24,
			"homeTeamId": "mun",
			"awayTeamId": "ful",
			"homeGoals": 3,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw24-nfo-cry",
			"round": 24,
			"homeTeamId": "nfo",
			"awayTeamId": "cry",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw24-tot-mci",
			"round": 24,
			"homeTeamId": "tot",
			"awayTeamId": "mci",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw24-sun-bur",
			"round": 24,
			"homeTeamId": "sun",
			"awayTeamId": "bur",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw25-lee-nfo",
			"round": 25,
			"homeTeamId": "lee",
			"awayTeamId": "nfo",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw25-mun-tot",
			"round": 25,
			"homeTeamId": "mun",
			"awayTeamId": "tot",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw25-ars-sun",
			"round": 25,
			"homeTeamId": "ars",
			"awayTeamId": "sun",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw25-bou-avl",
			"round": 25,
			"homeTeamId": "bou",
			"awayTeamId": "avl",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw25-bur-whu",
			"round": 25,
			"homeTeamId": "bur",
			"awayTeamId": "whu",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw25-ful-eve",
			"round": 25,
			"homeTeamId": "ful",
			"awayTeamId": "eve",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw25-wol-che",
			"round": 25,
			"homeTeamId": "wol",
			"awayTeamId": "che",
			"homeGoals": 1,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw25-new-bre",
			"round": 25,
			"homeTeamId": "new",
			"awayTeamId": "bre",
			"homeGoals": 2,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw25-bha-cry",
			"round": 25,
			"homeTeamId": "bha",
			"awayTeamId": "cry",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw25-liv-mci",
			"round": 25,
			"homeTeamId": "liv",
			"awayTeamId": "mci",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw26-che-lee",
			"round": 26,
			"homeTeamId": "che",
			"awayTeamId": "lee",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw26-eve-bou",
			"round": 26,
			"homeTeamId": "eve",
			"awayTeamId": "bou",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw26-tot-new",
			"round": 26,
			"homeTeamId": "tot",
			"awayTeamId": "new",
			"homeGoals": 1,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw26-whu-mun",
			"round": 26,
			"homeTeamId": "whu",
			"awayTeamId": "mun",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw26-avl-bha",
			"round": 26,
			"homeTeamId": "avl",
			"awayTeamId": "bha",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw26-mci-ful",
			"round": 26,
			"homeTeamId": "mci",
			"awayTeamId": "ful",
			"homeGoals": 3,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw26-nfo-wol",
			"round": 26,
			"homeTeamId": "nfo",
			"awayTeamId": "wol",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw26-cry-bur",
			"round": 26,
			"homeTeamId": "cry",
			"awayTeamId": "bur",
			"homeGoals": 2,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw26-sun-liv",
			"round": 26,
			"homeTeamId": "sun",
			"awayTeamId": "liv",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw26-bre-ars",
			"round": 26,
			"homeTeamId": "bre",
			"awayTeamId": "ars",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw27-avl-lee",
			"round": 27,
			"homeTeamId": "avl",
			"awayTeamId": "lee",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw27-bre-bha",
			"round": 27,
			"homeTeamId": "bre",
			"awayTeamId": "bha",
			"homeGoals": 0,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw27-che-bur",
			"round": 27,
			"homeTeamId": "che",
			"awayTeamId": "bur",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw27-whu-bou",
			"round": 27,
			"homeTeamId": "whu",
			"awayTeamId": "bou",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw27-mci-new",
			"round": 27,
			"homeTeamId": "mci",
			"awayTeamId": "new",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw27-cry-wol",
			"round": 27,
			"homeTeamId": "cry",
			"awayTeamId": "wol",
			"homeGoals": 1,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw27-nfo-liv",
			"round": 27,
			"homeTeamId": "nfo",
			"awayTeamId": "liv",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw27-sun-ful",
			"round": 27,
			"homeTeamId": "sun",
			"awayTeamId": "ful",
			"homeGoals": 1,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw27-tot-ars",
			"round": 27,
			"homeTeamId": "tot",
			"awayTeamId": "ars",
			"homeGoals": 1,
			"awayGoals": 4,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw27-eve-mun",
			"round": 27,
			"homeTeamId": "eve",
			"awayTeamId": "mun",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw28-wol-avl",
			"round": 28,
			"homeTeamId": "wol",
			"awayTeamId": "avl",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw28-bou-sun",
			"round": 28,
			"homeTeamId": "bou",
			"awayTeamId": "sun",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw28-bur-bre",
			"round": 28,
			"homeTeamId": "bur",
			"awayTeamId": "bre",
			"homeGoals": 3,
			"awayGoals": 4,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw28-liv-whu",
			"round": 28,
			"homeTeamId": "liv",
			"awayTeamId": "whu",
			"homeGoals": 5,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw28-new-eve",
			"round": 28,
			"homeTeamId": "new",
			"awayTeamId": "eve",
			"homeGoals": 2,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw28-lee-mci",
			"round": 28,
			"homeTeamId": "lee",
			"awayTeamId": "mci",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw28-bha-nfo",
			"round": 28,
			"homeTeamId": "bha",
			"awayTeamId": "nfo",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw28-ful-tot",
			"round": 28,
			"homeTeamId": "ful",
			"awayTeamId": "tot",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw28-mun-cry",
			"round": 28,
			"homeTeamId": "mun",
			"awayTeamId": "cry",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw28-ars-che",
			"round": 28,
			"homeTeamId": "ars",
			"awayTeamId": "che",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw29-bou-bre",
			"round": 29,
			"homeTeamId": "bou",
			"awayTeamId": "bre",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw29-eve-bur",
			"round": 29,
			"homeTeamId": "eve",
			"awayTeamId": "bur",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw29-lee-sun",
			"round": 29,
			"homeTeamId": "lee",
			"awayTeamId": "sun",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw29-wol-liv",
			"round": 29,
			"homeTeamId": "wol",
			"awayTeamId": "liv",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw29-avl-che",
			"round": 29,
			"homeTeamId": "avl",
			"awayTeamId": "che",
			"homeGoals": 1,
			"awayGoals": 4,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw29-bha-ars",
			"round": 29,
			"homeTeamId": "bha",
			"awayTeamId": "ars",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw29-ful-whu",
			"round": 29,
			"homeTeamId": "ful",
			"awayTeamId": "whu",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw29-mci-nfo",
			"round": 29,
			"homeTeamId": "mci",
			"awayTeamId": "nfo",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw29-new-mun",
			"round": 29,
			"homeTeamId": "new",
			"awayTeamId": "mun",
			"homeGoals": 2,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw29-tot-cry",
			"round": 29,
			"homeTeamId": "tot",
			"awayTeamId": "cry",
			"homeGoals": 1,
			"awayGoals": 3,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw30-bur-bou",
			"round": 30,
			"homeTeamId": "bur",
			"awayTeamId": "bou",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw30-sun-bha",
			"round": 30,
			"homeTeamId": "sun",
			"awayTeamId": "bha",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw30-ars-eve",
			"round": 30,
			"homeTeamId": "ars",
			"awayTeamId": "eve",
			"homeGoals": 2,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw30-che-new",
			"round": 30,
			"homeTeamId": "che",
			"awayTeamId": "new",
			"homeGoals": 0,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw30-whu-mci",
			"round": 30,
			"homeTeamId": "whu",
			"awayTeamId": "mci",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw30-cry-lee",
			"round": 30,
			"homeTeamId": "cry",
			"awayTeamId": "lee",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw30-mun-avl",
			"round": 30,
			"homeTeamId": "mun",
			"awayTeamId": "avl",
			"homeGoals": 3,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw30-nfo-ful",
			"round": 30,
			"homeTeamId": "nfo",
			"awayTeamId": "ful",
			"homeGoals": 0,
			"awayGoals": 0,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw30-liv-tot",
			"round": 30,
			"homeTeamId": "liv",
			"awayTeamId": "tot",
			"homeGoals": 1,
			"awayGoals": 1,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw30-bre-wol",
			"round": 30,
			"homeTeamId": "bre",
			"awayTeamId": "wol",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		},
		{
			"fixtureId": "gw31-wol-ars",
			"round": 31,
			"homeTeamId": "wol",
			"awayTeamId": "ars",
			"homeGoals": 2,
			"awayGoals": 2,
			"tags": [],
			"source": "real"
		}
	]
};
