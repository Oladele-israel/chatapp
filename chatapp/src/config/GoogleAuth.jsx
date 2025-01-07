import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleAuthManual = () => {
  const navigate = useNavigate();

  const handleCallbackResponse = async (response) => {
    try {
      if (!response || !response.credential) {
        throw new Error("No credential received from Google.");
      }

      const payload = JSON.parse(atob(response.credential.split(".")[1]));

      if (!payload.name || !payload.email) {
        throw new Error("Incomplete user data from Google.");
      }

      const userData = {
        user_name: payload.name,
        email: payload.email,
        password: "placeholder_password",
      };

      const res = await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (res.ok && data.message === "User registered successfully") {
        console.log("User registered successfully:", data);
        navigate("/");
      } else if (data.message === "Email already exists") {
        alert("This email is already registered.");
      } else {
        console.error("Unexpected response from server:", data);
        alert("An error occurred during registration. Please try again.");
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

    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
};

export default GoogleAuthManual;
