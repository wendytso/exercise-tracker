import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import exerciseGif from "../assets/exercise.gif";
import "./loginpage.css";

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
    <div className="login-container">
      <h1 className="login-header">Enduro Login</h1>
      <img src={exerciseGif} alt="Exercise GIF" className="login-gif" />

      {/* Username Input */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <FaUser className="input-icon" />
      </div>

      {/* Password Input */}
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <FaLock className="input-icon" />
      </div>

      <div className="flex justify-between items-center w-72 mb-6">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          Remember Me
        </label>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
      </div>

      {/* Social Buttons */}
      <div className="flex justify-center mb-10">
        <button
          className="bg-red-500 text-white border rounded-full hover:bg-red-600"
          style={{ padding: "1rem", marginRight: "1rem" }}
        >
          <FaGoogle className="text-2xl" />
        </button>
        <button
          className="bg-blue-600 text-white border rounded-full hover:bg-blue-700"
          style={{ padding: "1rem", marginRight: "1rem" }}
        >
          <FaFacebook className="text-2xl" />
        </button>
        <button
          className="bg-pink-500 text-white border rounded-full hover:bg-pink-600"
          style={{ padding: "1rem" }}
        >
          <FaInstagram className="text-2xl" />
        </button>
      </div>

      {/* Login Button */}
      <button onClick={handleLogin} className="login-button">
        Next
      </button>
    </div>
  );
};

export default LoginPage;
