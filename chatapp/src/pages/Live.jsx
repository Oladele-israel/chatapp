import { Club, CalendarDays, Volleyball } from "lucide-react";
import { useState } from "react";
import MatchInfo from "../components/LiveComponent/MatchInfo.jsx";
import MatchLineUps from "../components/LiveComponent/MatchLineUps.jsx";
import MatchStats from "../components/LiveComponent/MatchStats.jsx";
import MatchHighlight from "../components/LiveComponent/MatchHighlight.jsx";

const Live = () => {
  const [activeTab, setActiveTab] = useState(0); // Default to "Info" tab

  const tabs = ["Info", "Summary", "Stats", "Line-ups", "Highlights"];

  // Function to render the appropriate component
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 0:
        return <MatchInfo />;
      case 1:
        return <div className="text-gray-300">Match Summary Coming Soon</div>;
      case 2:
        return <MatchStats />;
      case 3:
        return <MatchLineUps />;
      case 4:
        return <MatchHighlight />;
      default:
        return <div className="text-gray-300">No content available</div>;
    }
  };

  return (
    <section className="p-3">
      <div className="mt-16 mb-2">
        <div className="flex items-center gap-2">
          <Club size={38} strokeWidth={1.75} className="text-red-500" />
          <div className="">
            <p
              className="text-xl capitalize font-bold
            text-slate-100"
            >
              the champions league 2025
            </p>
            <p className="font-thin capitalize text-gray-100">world wide</p>
          </div>
        </div>
      </div>

      {/* Display Table */}
      <div className="w-full max-w-4xl mx-auto p-1 space-y-6 bg-[#222222] rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 rounded-lg">
          <div className="flex items-center space-x-3 flex-col">
            <img
              src="team1-logo.png"
              alt="Team 1 Logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="text-lg font-semibold text-gray-100">Arsenal</span>
          </div>

          <div className="text-xl font-bold text-gray-100 flex flex-col items-center">
            <p>2 - 1</p>
            <p className="text-sm mt-2">FT</p>
          </div>

          <div className="flex items-center space-x-3 flex-col">
            <img
              src="team2-logo.png"
              alt="Team 2 Logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="text-lg font-semibold text-gray-100">Chelsea</span>
          </div>
        </div>
      </div>

      {/* Match Details */}
      <div className="w-full mt-4">
        {/* Tabs */}
        <div className="flex justify-evenly w-full text-gray-300 border-t border-b p-2">
          {tabs.map((tab, index) => (
            <p
              key={index}
              onClick={() => setActiveTab(index)} // Set active tab on click
              className={`cursor-pointer ${
                activeTab === index ? "text-[#C3CC5A] font-bold" : ""
              }`}
            >
              {tab}
            </p>
          ))}
        </div>
      </div>

      {/* Render Active Tab Content */}
      <div className="mt-4">{renderActiveTabContent()}</div>
    </section>
  );
};

export default Live;
