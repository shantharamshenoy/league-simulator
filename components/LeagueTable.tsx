import { Team } from "@/types/league";
import Image from "next/image";

type Props = {
  teams: Team[];
  seasonComplete?: boolean;
};

function getFormLetter(points: number): "W" | "D" | "L" {
  if (points === 3) return "W";
  if (points === 1) return "D";
  return "L";
}

function getFormClass(letter: "W" | "D" | "L"): string {
  if (letter === "W") return "bg-emerald-100 text-emerald-700";
  if (letter === "D") return "bg-slate-200 text-slate-700";
  return "bg-red-100 text-red-700";
}

function renderForm(form: number[]) {
  const lastFive = form.slice(-5);
  const padded = Array.from({ length: 5 - lastFive.length }, () => null);
  const display = [...padded, ...lastFive];

  return (
    <div className="flex items-center gap-1">
      {display.map((value, index) => {
        if (value === null) {
          return (
            <span
              key={`empty-${index}`}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-400"
            >
              -
            </span>
          );
        }

        const letter = getFormLetter(value);

        return (
          <span
            key={`${value}-${index}`}
            className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${getFormClass(
              letter
            )}`}
            title={letter === "W" ? "Win" : letter === "D" ? "Draw" : "Loss"}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}

export default function LeagueTable({
  teams,
  seasonComplete = false,
}: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-slate-900">
        <thead className="bg-slate-200 text-left font-semibold text-slate-900">
          <tr>
            <th className="px-3 py-2">POS</th>
            <th className="px-3 py-2">TEAM</th>
            <th className="px-3 py-2">P</th>
            <th className="px-3 py-2">W</th>
            <th className="px-3 py-2">D</th>
            <th className="px-3 py-2">L</th>
            <th className="px-3 py-2">GF</th>
            <th className="px-3 py-2">GA</th>
            <th className="px-3 py-2">GD</th>
            <th className="px-3 py-2">PTS</th>
            <th className="px-3 py-2">FORM</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => {
            const isChampion = seasonComplete && index === 0;
            const isChampionsLeague = index >= 1 && index <= 3; // 2nd-4th
            const isEuropaLeague = index === 4; // 5th
            const isConferenceLeague = index === 5; // 6th
            const isRelegation = index >= 17; // 18th-20th

            let rowClass = "bg-white";

            if (isChampion) {
              rowClass = "bg-amber-100";
            } else if (isChampionsLeague) {
              rowClass = "bg-emerald-50";
            } else if (isEuropaLeague) {
              rowClass = "bg-orange-100";
            } else if (isConferenceLeague) {
              rowClass = "bg-amber-50";
            } else if (isRelegation) {
              rowClass = "bg-red-50";
            }

            return (
              <tr
                key={team.id}
                className={`border-b border-slate-200 ${rowClass}`}
              >
                <td className="px-3 py-2 font-medium">
                  {isChampion ? (
                    <span title="Champions" className="text-lg">
                      🏆
                    </span>
                  ) : (
                    index + 1
                  )}
                </td>

                <td className="px-3 py-2">
                  <div className="flex min-w-[180px] items-center gap-2 font-medium">
                    <Image
                      src={team.logo}
                      alt={team.name}
                      width={20}
                      height={20}
                    />
                    <span className="truncate">{team.name}</span>
                  </div>
                </td>

                <td className="px-3 py-2">{team.played}</td>
                <td className="px-3 py-2">{team.won}</td>
                <td className="px-3 py-2">{team.drawn}</td>
                <td className="px-3 py-2">{team.lost}</td>
                <td className="px-3 py-2">{team.gf}</td>
                <td className="px-3 py-2">{team.ga}</td>
                <td className="px-3 py-2">
                  {team.gd > 0 ? `+${team.gd}` : team.gd}
                </td>
                <td className="px-3 py-2 font-bold">{team.points}</td>
                <td className="px-3 py-2">{renderForm(team.form)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
