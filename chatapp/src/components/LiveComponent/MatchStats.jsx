import StatRow from "./reuseableComponent/StatRow.jsx";
import { useState, useEffect } from "react";

const MatchStats = () => {
  const [stats, setStats] = useState({
    possession: { teamA: 50, teamB: 50 },
    shotsOnTarget: { teamA: 0, teamB: 0 },
    corners: { teamA: 0, teamB: 0 },
    fouls: { teamA: 0, teamB: 0 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        possession: {
          teamA: Math.max(
            40,
            Math.min(
              60,
              prevStats.possession.teamA + (Math.random() > 0.5 ? 1 : -1)
            )
          ),
          teamB: Math.max(40, Math.min(60, 100 - prevStats.possession.teamA)),
        },
        shotsOnTarget: {
          teamA: prevStats.shotsOnTarget.teamA + Math.round(Math.random() * 2),
          teamB: prevStats.shotsOnTarget.teamB + Math.round(Math.random() * 2),
        },
        corners: {
          teamA: prevStats.corners.teamA + Math.round(Math.random() * 1),
          teamB: prevStats.corners.teamB + Math.round(Math.random() * 1),
        },
        fouls: {
          teamA: prevStats.fouls.teamA + Math.round(Math.random() * 1),
          teamB: prevStats.fouls.teamB + Math.round(Math.random() * 1),
        },
      }));
    }, 5000); // Updates every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 bg-[#222222] shadow-lg rounded-lg mt-4">
      <h2 className="text-xl font-bold text-center text-gray-200 mb-4">
        Match Stats
      </h2>
      <div className="space-y-4">
        <StatRow
          title="Possession"
          teamA={`${stats.possession.teamA}%`}
          teamB={`${stats.possession.teamB}%`}
        />
        <StatRow
          title="Shots on Target"
          teamA={stats.shotsOnTarget.teamA}
          teamB={stats.shotsOnTarget.teamB}
        />
        <StatRow
          title="Corners"
          teamA={stats.corners.teamA}
          teamB={stats.corners.teamB}
        />
        <StatRow
          title="Fouls"
          teamA={stats.fouls.teamA}
          teamB={stats.fouls.teamB}
        />
      </div>
    </div>
  );
};

export default MatchStats;
