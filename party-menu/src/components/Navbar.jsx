import axios from "axios";
import React, { useEffect, useState } from "react";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

const Navbar = ({ setMeals, setActiveComponent, setIsLoggedIn, isLoggedIn, user }) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input (wait 500ms before triggering API)
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
    <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-4 h-20">
      {/* Logo / Title */}
      <h1
        className="text-2xl font-bold flex items-center cursor-pointer hover:text-blue-500"
        onClick={() => setActiveComponent("login")}
      >
        <span className="text-green-300 text-5xl mr-2 hover:text-amber-300">SB's</span>
        Restaurant
      </h1>

      {/* Conditional Rendering */}
      {!isLoggedIn ? (
        <div className="flex gap-6">
          <button
            onClick={() => setActiveComponent("login")}
            className="text-white font-bold underline hover:text-pink-500"
          >
            Login
          </button>
          <button
            onClick={() => setActiveComponent("register")}
            className="text-white font-bold underline hover:text-pink-500"
          >
            Signup
          </button>
        </div>
      ) : (
        <>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-white bg-transparent text-white px-2 py-1 rounded"
              placeholder="Enter the Menu"
              aria-label="Search meals"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-green-600 px-3 py-1 rounded text-white font-semibold"
            >
              Search
            </button>
          </form>

          {/* User Profile */}
          <span className="font-bold text-xl ml-6 capitalize border-2 border-gray-300 rounded-full w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-800">
            {user?.name ? user.name.charAt(0).toUpperCase() : "P"}
          </span>

          {/* Logout Component */}
          <Logout setIsLoggedIn={setIsLoggedIn} setActiveComponent={setActiveComponent} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
