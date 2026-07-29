import axios from "axios";
import React, { useEffect, useState } from "react";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

const Navbar = ({ setMeals, setActiveComponent, setIsLoggedIn, isLoggedIn, user }) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input (500ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  // Fetch meals when debounced search changes
  useEffect(() => {
    if (!debouncedSearch) return;

    const fetchMeals = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedSearch}`
        );
        setMeals(res.data.meals || []);
      } catch (err) {
        console.error("Error fetching meals:", err);
        setMeals([]);
      }
    };

    fetchMeals();
  }, [debouncedSearch, setMeals]);

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveComponent("search");
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex items-center justify-between px-6 py-4 shadow-lg sticky top-0 z-50">
      {/* Logo / Title */}
      <h1
        className="text-2xl md:text-3xl font-extrabold flex items-center cursor-pointer hover:text-amber-400 transition-colors"
        onClick={() => setActiveComponent("login")}
      >
        <span className="text-green-400 text-5xl mr-2 hover:text-pink-400 transition-transform transform hover:scale-110">
          SB's
        </span>
        Restaurant
      </h1>

      {/* Conditional Rendering */}
      {!isLoggedIn ? (
        <div className="flex gap-6">
          <button
            onClick={() => setActiveComponent("login")}
            className="text-white font-bold underline hover:text-pink-400 transition"
          >
            Login
          </button>
          <button
            onClick={() => setActiveComponent("register")}
            className="text-white font-bold underline hover:text-pink-400 transition"
          >
            Signup
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-400 bg-transparent text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Search menu..."
              aria-label="Search meals"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-semibold shadow transition-transform transform hover:scale-105"
            >
              Search
            </button>
          </form>

          {/* User Profile */}
          <span className="font-bold text-xl capitalize border-2 border-gray-300 rounded-full w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-800 shadow-md">
            {user?.name ? user.name.charAt(0).toUpperCase() : "P"}
          </span>

          {/* Logout Component */}
          <Logout setIsLoggedIn={setIsLoggedIn} setActiveComponent={setActiveComponent} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
