import { useState, useEffect } from "react";

const MatchInfo = () => {
  const [scores, setScores] = useState([
    {
      id: 1,
      minute: 0,
      score: "0 - 0",
      summary: "Match started",
    },
    {
      id: 2,
      minute: 0,
      score: "0 - 0",
      summary: "Match started",
    },
    {
      id: 3,
      minute: 0,
      score: "0 - 0",
      summary: "Match started",
    },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setScores((prevScores) =>
        prevScores.map((match) => {
          const events = [
            "Goal by Team A",
            "Goal by Team B",
            "Red Card",
            "Foul",
            "Corner Kick",
          ];
          const randomEvent =
            Math.random() < 0.3
              ? events[Math.floor(Math.random() * events.length)]
              : "No events";
          const [scoreA, scoreB] = match.score.split(" - ").map(Number);

          return {
            ...match,
            minute: match.minute + 1,
            score:
              randomEvent === "Goal by Team A"
                ? `${scoreA + 1} - ${scoreB}`
                : randomEvent === "Goal by Team B"
                ? `${scoreA} - ${scoreB + 1}`
                : `${scoreA} - ${scoreB}`,
            summary: randomEvent,
          };
        })
      );
    }, 60000); // Updates every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto bg-[#222222] shadow-lg rounded-lg mt-4">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse text-left">
          <thead className="bg-gray-800 text-white">
            <tr className="bg-[#2c2c2c]">
              <th className="px-4 py-3 ">Min</th>
              <th className="px-4 py-3 ">Score</th>
              <th className="px-4 py-3">Summary</th>
            </tr>
          </thead>
          <tbody>
            {scores.map(({ id, minute, score, summary }) => (
              <tr key={id} className="border-b border-gray-300 ">
                <td className="px-4 py-3 border-gray-300  font-semibold text-[#C3CC5A]">
                  {minute}'
                </td>
                <td className="px-4 py-3 font-semibold text-gray-200">
                  {score}
                </td>
                <td className="px-4 py-3 text-gray-200">{summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchInfo;
