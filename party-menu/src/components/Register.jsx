import React, { useState } from "react";
import axios from "axios";

const Register = ({ setIsLoggedIn, setActiveComponent }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}user/register`,
        formData,
        { withCredentials: true }
      );
      console.log("User registered successfully.", res.data);
      alert("🎉 Registration successful!");
      setIsLoggedIn(true);
      setActiveComponent("home");
    } catch (err) {
      console.error("Server Error", err);
      alert("❌ Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-md border border-gray-200">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          ✨ Create Your Account
        </h2>

        {/* Form */}
        <form className="space-y-6" onSubmit={onSubmitHandler}>
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 font-medium mb-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              onChange={changeHandler}
              value={formData.name}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 hover:border-blue-400 outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 font-medium mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              onChange={changeHandler}
              value={formData.email}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 hover:border-blue-400 outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 font-medium mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={changeHandler}
              value={formData.password}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 hover:border-blue-400 outline-none transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg p-3 text-white font-semibold shadow-md transition-transform transform ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account?{" "}
          <button
            onClick={() => setActiveComponent("login")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
