import { useState } from "react";

const ProfileSetting = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    favoriteTeam: "Manchester United",
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setUser(formData);
    setEditing(false);
  };
  return (
    <div className="mt-14 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="bg-[#222222] h-screen rounded-lg shadow-lg p-6">
          {editing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#2c2c2c] outline-[#C3CC5A]  rounded-md p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#2c2c2c] outline-[#C3CC5A] rounded-md p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Favorite Team
                </label>
                <input
                  type="text"
                  name="favoriteTeam"
                  value={formData.favoriteTeam}
                  onChange={handleInputChange}
                  className="w-full bg-[#2c2c2c] outline-[#C3CC5A] rounded-md p-2 text-white"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 bg-red-500 rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#C3CC5A] text-black font-bold rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex gap-2 itmes-center">
                <div className="flex items-center justify-center gap-2 rounded-full bg-black w-16 h-16 text-center text-slate-200 font-medium">
                  Ola
                </div>
                <div className="flex-col items-center self-center">
                  <div>oladele israel</div>
                  <div>omole112@gmail.com</div>
                </div>
              </div>

              <p className="rounded border p-4 border-[#C3CC5A]">
                <strong>Favorite Team:</strong> {user.favoriteTeam}
              </p>
              <button
                onClick={() => setEditing(true)}
                className="mt-4 px-4 py-2 bg-[#2c2c2c] rounded-md hover:bg-[#C3CC5A] hover:text-black"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
