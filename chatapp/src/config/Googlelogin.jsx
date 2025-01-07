import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleLoginManual = () => {
  const navigate = useNavigate();

  const handleCallbackResponse = async (response) => {
    try {
      if (!response || !response.credential) {
        throw new Error("No credential received from Google.");
      }

      // Decode the Google ID token to get user details
      const payload = JSON.parse(atob(response.credential.split(".")[1]));

      if (!payload.email) {
        throw new Error("Incomplete user data from Google.");
      }

      const userData = {
        email: payload.email,
        password: "placeholder_password", // Optional for Google-authenticated users
      };

      // Send login data to backend
      const res = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include", // Include cookies sent by the server
      });

      const data = await res.json();

      if (res.ok && data.success) {
        console.log("User logged in successfully:", data);
        navigate("/"); // Navigate to home page
      } else {
        alert(
          data.message || "An error occurred during login. Please try again."
        );
      }
    } catch (err) {
      console.error("Error in Google callback response:", err);
      alert("An error occurred during authentication. Please try again.");
    }
  };

  useEffect(() => {
    if (!window.google || !window.google.accounts) {
      console.error("Google Sign-In library is not loaded.");
      return;
    }

    // Initialize Google Sign-In
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_CLIENT_ID, // Replace with your Google Client ID
      callback: handleCallbackResponse,
    });

    // Render the Google Sign-In button
    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>{" "}
      {/* Google Sign-In button will be rendered here */}
    </div>
  );
};

export default GoogleLoginManual;
