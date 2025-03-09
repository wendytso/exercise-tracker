import "./MainPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";
import AIGenerator from "./components/AIGenerator";
import Carousel from "./components/Carousel";
import ExerciseTimeTracker from "./components/ExerciseTimeTracker";

import swimImage from "../assets/swimming-boys.png";
import runImage from "../assets/running-girl.png";
import skiImage from "../assets/skiing-girl.png";
import snowboardingImage from "../assets/snowboarding-girl.png";
import tennisImage from "../assets/tennis-boy.png";
import golfImage from "../assets/golf-man.png";
import badmintonImage from "../assets/badminton-children.png";
import basketballImage from "../assets/basketball-girls.png";

function MainPage() {
  const exercises = [
    { name: "Swimming", image: swimImage },
    { name: "Running", image: runImage },
    { name: "Skiing", image: skiImage },
    { name: "Snowboarding", image: snowboardingImage },
    { name: "Tennis", image: tennisImage },
    { name: "Golfing", image: golfImage },
    { name: "Badminton", image: badmintonImage },
    { name: "Basketball", image: basketballImage },
  ];

  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);
  const [exerciseTimes, setExerciseTimes] = useState({});

  const buttonLabels = [15, 30, 45, 60];

  const handleAddTime = (minutes) => {
    setExerciseTimes((prevTimes) => ({
      ...prevTimes,
      [selectedExercise.name]:
        (prevTimes[selectedExercise.name] || 0) + minutes,
    }));
  };

  const navigate = useNavigate(); // ✅ Initialize navigation

  const goToLeaderboard = () => {
    navigate("/leaderboard", { state: { exerciseTimes } }); // ✅ Pass exerciseTimes
  };

  return (
    <div className="main-container">
      <Header />
      {/* ✅ "Go to Leaderboard" Button */}
      <div className="leaderboard-button-container">
        <button onClick={goToLeaderboard} className="leaderboard-button">
          View Leaderboard
        </button>
      </div>

      <div className="content">
        <div className="title">
          <h1>What exercise are you doing today?</h1>

          <Carousel
            exercises={exercises}
            onExerciseSelect={setSelectedExercise}
          />

          <div className="time-buttons">
            {buttonLabels.map((minutes) => (
              <Button
                key={minutes}
                text={`${minutes} minutes`}
                onClick={() => handleAddTime(minutes)}
              />
            ))}
          </div>

          <ExerciseTimeTracker
            selectedExercise={selectedExercise}
            exerciseTimes={exerciseTimes}
          />
        </div>

        <AIGenerator />
      </div>

      <Footer />
    </div>
  );
}

export default MainPage;
