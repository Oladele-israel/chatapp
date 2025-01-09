const StatRow = ({ title, teamA, teamB }) => (
  <div className="flex justify-between items-center text-gray-300 ">
    <div className="w-1/4 text-left ">{teamA}</div>
    <div className="w-2/4 text-center">
      <p className="font-semibold text-gray-500 p-2">{title}</p>
      <div
        className="w-full bg-gray-200 h-2 relative rounded overflow-hidden "
        title={title}
      >
        <div
          className="bg-gray-500 h-full absolute left-0 transition-all duration-500"
          style={{ width: `${Math.min(parseInt(teamA), 100)}%` }}
        ></div>
        <div
          className="bg-[#C3CC5A] h-full absolute right-0 transition-all duration-500"
          style={{ width: `${Math.min(parseInt(teamB), 100)}%` }}
        ></div>
      </div>
    </div>
    <div className="w-1/4 text-right">{teamB}</div>
  </div>
);

export default StatRow;
