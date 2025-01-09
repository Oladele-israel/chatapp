const MatchLineUps = () => {
  const lineup = {
    teamA: {
      name: "Team A",
      starting11: [
        { name: "Player A1", jersey: 1 },
        { name: "Player A2", jersey: 2 },
        { name: "Player A3", jersey: 3 },
        { name: "Player A4", jersey: 4 },
        { name: "Player A5", jersey: 5 },
        { name: "Player A6", jersey: 6 },
        { name: "Player A7", jersey: 7 },
        { name: "Player A8", jersey: 8 },
        { name: "Player A9", jersey: 9 },
        { name: "Player A10", jersey: 10 },
        { name: "Player A11", jersey: 11 },
      ],
      substitutes: [
        { name: "Sub A1", jersey: 12 },
        { name: "Sub A2", jersey: 13 },
        { name: "Sub A3", jersey: 14 },
        { name: "Sub A4", jersey: 15 },
        { name: "Sub A5", jersey: 16 },
      ],
    },
    teamB: {
      name: "Team B",
      starting11: [
        { name: "Player B1", jersey: 1 },
        { name: "Player B2", jersey: 2 },
        { name: "Player B3", jersey: 3 },
        { name: "Player B4", jersey: 4 },
        { name: "Player B5", jersey: 5 },
        { name: "Player B6", jersey: 6 },
        { name: "Player B7", jersey: 7 },
        { name: "Player B8", jersey: 8 },
        { name: "Player B9", jersey: 9 },
        { name: "Player B10", jersey: 10 },
        { name: "Player B11", jersey: 11 },
      ],
      substitutes: [
        { name: "Sub B1", jersey: 12 },
        { name: "Sub B2", jersey: 13 },
        { name: "Sub B3", jersey: 14 },
        { name: "Sub B4", jersey: 15 },
        { name: "Sub B5", jersey: 16 },
      ],
    },
  };
  return (
    <div className="p-6 max-w-6xl mx-auto bg-[#222222] shadow-lg rounded-lg mt-5">
      <h2 className="text-xl font-bold text-center text-gray-200 mb-6">
        Team Lineup
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Team B on the left */}
        <div className="bg-[#2C2C2C] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-center text-gray-200 mb-4">
            {lineup.teamB.name}
          </h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#222222] text-white">
                  <th className="px-4 py-2">Jersey</th>
                  <th className="px-4 py-2">Player</th>
                </tr>
              </thead>
              <tbody>
                {lineup.teamB.starting11.map((player, index) => (
                  <tr key={index} className="border-b border-gray-300 ">
                    <td className="px-4 py-2 font-semibold text-gray-200">
                      #{player.jersey}
                    </td>
                    <td className="px-4 py-2 text-[#C3CC5A]">{player.name}</td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan={2}
                    className="bg-[#222222]  text-gray-300 px-4 py-2 font-semibold text-center"
                  >
                    Substitutes
                  </td>
                </tr>
                {lineup.teamB.substitutes.map((sub, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-300 hover:bg-[#C3CC5A]"
                  >
                    <td className="px-4 py-2 font-semibold text-gray-200">
                      #{sub.jersey}
                    </td>
                    <td className="px-4 py-2 text-gray-300">{sub.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Team A on the right */}
        <div className="bg-[#2C2C2C] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-center text-gray-300 mb-4">
            {lineup.teamA.name}
          </h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#2C2C2C] text-white">
                  <th className="px-4 py-2">Jersey</th>
                  <th className="px-4 py-2">Player</th>
                </tr>
              </thead>
              <tbody>
                {lineup.teamA.starting11.map((player, index) => (
                  <tr key={index} className="border-b border-gray-300 ">
                    <td className="px-4 py-2 font-semibold text-gray-300">
                      #{player.jersey}
                    </td>
                    <td className="px-4 py-2 text-[#C3CC5A]">{player.name}</td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan={2}
                    className="bg-[#2C2C2C] text-gray-300 px-4 py-2 font-semibold text-center"
                  >
                    Substitutes
                  </td>
                </tr>
                {lineup.teamA.substitutes.map((sub, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-300 hover:bg-[#C3CC5A]"
                  >
                    <td className="px-4 py-2 font-semibold text-gray-300">
                      #{sub.jersey}
                    </td>
                    <td className="px-4 py-2 text-gray-300 ">{sub.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchLineUps;
