import "./LeaderboardPage.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ActivitySummary from "./components/ActivitySummary";
import LeaderboardStats from "./components/LeaderboardStats";

function LeaderboardPage() {
  const [exerciseTimes, setExerciseTimes] = useState(
    JSON.parse(localStorage.getItem("exerciseTimes")) || {}
  );

  useEffect(() => {
    setExerciseTimes(JSON.parse(localStorage.getItem("exerciseTimes")) || {});
  }, []);

  return (
    <div className="leaderboard-container">
      <Header />

      <h1 className="leaderboard-title">🏆 Leaderboard 🏆</h1>
      <p className="leaderboard-subtitle">
        Track your activity and compare with your friends!
      </p>

      {/* ✅ Shows time spent per activity */}
      <ActivitySummary exerciseTimes={exerciseTimes} />

      {/* ✅ Displays leaderboard rankings */}
      <LeaderboardStats exerciseTimes={exerciseTimes} />
    </div>
  );
}

export default LeaderboardPage;
