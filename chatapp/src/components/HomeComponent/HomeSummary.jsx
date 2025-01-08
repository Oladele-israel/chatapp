import { Search } from "lucide-react";

const HomeSummary = () => {
  return (
    <section className="bg-[#222222] rounded-md mt-10 p-3 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 bg-[#2C2C2C] rounded-lg p-2 text-[#C3CC5A]">
          <div className="bg-[#C3CC5A] rounded-full w-2 h-2"></div>
          <div>Live [1]</div>
        </div>
        {/* search */}
        <div className="hidden">
          <Search />
          <input type="text" placeholder="search for matches" />
        </div>
        {/* filter  */}
        <div className="bg-[#2C2C2C] rounded-lg">
          <select
            name=""
            id=""
            className="bg-[#2C2C2C] text-slate-200 p-2 rounded"
          >
            <option value="">All matches</option>
          </select>
        </div>
      </div>

      {/* filter the day of the match you want add a **slider*/}
      <div className="mt-5 p-2">
        <div className="bg-[#2c2c2c] w-36 flex flex-col items-center rounded-lg capitalize text-white p-2 font-medium">
          <p>wednesday</p>
          <p>01 Jan</p>
        </div>
      </div>

      {/* live matches */}
      <div className="overflow-x-auto  bg-[#2C2C2C] rounded-lg shadow-lg mt-6">
        <div className="bg-black text-white p-3 capitalize">
          the champions league
        </div>
        <table className="w-full text-sm text-left text-gray-300">
          <tbody>
            <tr className="bg-[#2C2C2C]  transition-colors duration-200">
              <td className="p-4">18:00</td>
              <td className="p-4 font-medium">Team A vs Team B</td>
              <td className="p-4 font-bold">2 - 1</td>
            </tr>
            <tr className="bg-[#222222] transition-colors duration-200">
              <td className="p-4">20:30</td>
              <td className="p-4 font-medium">Team C vs Team D</td>
              <td className="p-4 font-bold">1 - 1</td>
            </tr>
            <tr className=" transition-colors duration-200">
              <td className="p-4">22:15</td>
              <td className="p-4 font-medium">Team E vs Team F</td>
              <td className="p-4 font-bold">3 - 2</td>
            </tr>
            <tr className="bg-[#222222] transition-colors duration-200">
              <td className="p-4">23:45</td>
              <td className="p-4 font-medium">Team G vs Team H</td>
              <td className="p-4 font-bold">0 - 0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto  bg-[#2C2C2C] rounded-lg shadow-lg mt-6">
        <div className="bg-black text-white p-3 capitalize">
          the champions league
        </div>
        <table className="w-full text-sm text-left text-gray-300">
          <tbody>
            <tr className="bg-[#2C2C2C]  transition-colors duration-200">
              <td className="p-4">18:00</td>
              <td className="p-4 font-medium">Team A vs Team B</td>
              <td className="p-4 font-bold">2 - 1</td>
            </tr>
            <tr className="bg-[#222222] transition-colors duration-200">
              <td className="p-4">20:30</td>
              <td className="p-4 font-medium">Team C vs Team D</td>
              <td className="p-4 font-bold">1 - 1</td>
            </tr>
            <tr className=" transition-colors duration-200">
              <td className="p-4">22:15</td>
              <td className="p-4 font-medium">Team E vs Team F</td>
              <td className="p-4 font-bold">3 - 2</td>
            </tr>
            <tr className="bg-[#222222] transition-colors duration-200">
              <td className="p-4">23:45</td>
              <td className="p-4 font-medium">Team G vs Team H</td>
              <td className="p-4 font-bold">0 - 0</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* the blog */}
      <div></div>
    </section>
  );
};

export default HomeSummary;
