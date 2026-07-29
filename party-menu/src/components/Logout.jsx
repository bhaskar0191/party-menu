import React from "react";
import axios from "axios";

const Logout = ({ setIsLoggedIn, setActiveComponent }) => {
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}user/logout`,
        {},
        { withCredentials: true }
      );

      if (res.status === 200) {
        localStorage.removeItem("token");
        setActiveComponent("home");
        setIsLoggedIn(false);
        alert(res.data.message || "✅ Logout Successful");
      } else {
        alert("❌ Logout failed. Please try again.");
      }
    } catch (err) {
      console.error("Logout Failed", err);
      alert("⚠️ An error occurred while trying to logout.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="ml-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:from-red-600 hover:to-red-700 transition-transform transform hover:scale-105"
    >
      🚪 Logout
    </button>
  );
};

export default Logout;
