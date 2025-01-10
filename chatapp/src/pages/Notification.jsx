import React, { useState } from "react";

const Notification = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [eventPreferences, setEventPreferences] = useState({
    goals: false,
    halfTime: false,
    fullTime: false,
  });
  const [notificationMethod, setNotificationMethod] = useState("push");
  const [mockMatchData] = useState([
    {
      team1: "Manchester United",
      team2: "Arsenal",
      score: "2 - 1",
      stats: {
        possession: "55% - 45%",
        shotsOnTarget: "7 - 5",
        fouls: "10 - 8",
      },
    },
    {
      team1: "Barcelona",
      team2: "Real Madrid",
      score: "3 - 2",
      stats: {
        possession: "48% - 52%",
        shotsOnTarget: "6 - 8",
        fouls: "12 - 14",
      },
    },
  ]);

  const handleTeamSelection = (team) => {
    setSelectedTeams((prev) =>
      prev.includes(team) ? prev.filter((t) => t !== team) : [...prev, team]
    );
  };

  const handleEventChange = (event) => {
    setEventPreferences((prev) => ({
      ...prev,
      [event]: !prev[event],
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Notification Preferences
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Customize notifications for your favorite teams and matches.
      </p>

      {/* Enable Notifications */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-800">Enable Notifications</span>
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>

      {/* Select Teams */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Select Teams
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {["Manchester United", "Arsenal", "Barcelona", "Real Madrid"].map(
            (team) => (
              <button
                key={team}
                onClick={() => handleTeamSelection(team)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedTeams.includes(team)
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {team}
              </button>
            )
          )}
        </div>
      </div>

      {/* Match Events */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Match Events
        </h2>
        <div className="space-y-3">
          {["goals", "halfTime", "fullTime"].map((event) => (
            <label key={event} className="flex items-center">
              <input
                type="checkbox"
                checked={eventPreferences[event]}
                onChange={() => handleEventChange(event)}
                className="form-checkbox text-purple-600"
              />
              <span className="ml-2 capitalize">
                {event.replace(/([A-Z])/g, " $1")}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Notification Methods */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Notification Method
        </h2>
        <div className="space-y-3">
          {["push", "email", "dailyDigest"].map((method) => (
            <label key={method} className="flex items-center">
              <input
                type="radio"
                name="notificationMethod"
                checked={notificationMethod === method}
                onChange={() => setNotificationMethod(method)}
                className="form-radio text-purple-600"
              />
              <span className="ml-2 capitalize">
                {method.replace(/([A-Z])/g, " $1")}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <button
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
        onClick={() =>
          alert(
            `Saved! Notifications for ${selectedTeams.join(
              ", "
            )}, Events: ${Object.keys(eventPreferences)
              .filter((e) => eventPreferences[e])
              .join(", ")}, Method: ${notificationMethod}`
          )
        }
      >
        Save Preferences
      </button>

      {/* Mock Match Data */}
      {notificationsEnabled && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Live Match Updates
          </h2>
          <div className="space-y-4">
            {mockMatchData.map((match, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  {match.team1} vs {match.team2}
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Score:</strong> {match.score}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Possession:</strong> {match.stats.possession}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Shots on Target:</strong> {match.stats.shotsOnTarget}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Fouls:</strong> {match.stats.fouls}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
