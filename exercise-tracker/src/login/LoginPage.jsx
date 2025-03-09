import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      navigate("/main");
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');`}
      </style>

      <h1
        className="text-4xl font-bold mb-6 text-blue-600"
        style={{ fontFamily: "Dongle, sans-serif" }}
      >
        Exercise Tracker Login
      </h1>

      {/* Username Input */}
      <div className="relative w-72 mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-blue-500"
          style={{ fontFamily: "Dongle, sans-serif", fontSize: "22px" }}
        />
        <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Password Input */}
      <div className="relative w-72 mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-blue-500"
          style={{ fontFamily: "Dongle, sans-serif", fontSize: "22px" }}
        />
        <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="flex justify-between items-center w-72 mb-6">
        <label
          className="flex items-center text-gray-600"
          style={{ fontFamily: "Dongle, sans-serif", fontSize: "22px" }}
        >
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          Remember Me
        </label>
        <a
          href="#"
          className="text-blue-500 hover:underline"
          style={{ fontFamily: "Dongle, sans-serif", fontSize: "22px" }}
        >
          Forgot Password?
        </a>
      </div>

      <button
        onClick={handleLogin}
        className="w-72 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
        style={{ fontFamily: "Dongle, sans-serif", fontSize: "22px" }}
      >
        Next
      </button>
    </div>
  );
};

export default LoginPage;
