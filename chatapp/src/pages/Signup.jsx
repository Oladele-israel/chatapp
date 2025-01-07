import { useState } from "react";
import desktopImage from "../assets/images/desktop.png";
import person from "../assets/images/person.svg";
import vector from "../assets/images/vector.svg";
import google from "../assets/images/google.png";
import GoogleAuthManual from "../config/GoogleAuth.jsx";

const Signup = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Send `formData` to the backend
    fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side Image for Desktop */}
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${desktopImage})`,
        }}
      ></div>

      {/* Right Side Form */}
      <div className="flex flex-1 justify-center items-center px-6 lg:px-12 ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white rounded shadow-lg space-y-6 flex flex-col "
        >
          <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

          {/* Username */}
          <div>
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2  border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 bg-[#F0EDFF]"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2  border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 bg-[#F0EDFF]"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2  border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 bg-[#F0EDFF]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-48 py-2 px-4 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 self-center"
          >
            Sign Up
          </button>

          {/* Google Sign Up */}
          <GoogleAuthManual />
        </form>
      </div>
    </div>
  );
};

export default Signup;

{
  /* <div className="mt-4 text-center">
  <legend className="text-sm text-gray-500 mb-2">Or sign up with</legend>

  <button
    type="button"
    className="w-full py-2 px-4 mt-2 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 focus:outline-none"
  >
    <img src={google} alt="Google logo" className="h-5 w-5 mr-2" />
    Sign up with Google
  </button>
</div>; */
}
