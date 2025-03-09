import "./MainPage.css";
import { useState, useEffect} from "react";
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
import { useNavigate } from "react-router-dom";

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
  const [exerciseTimes, setExerciseTimes] = useState(
    JSON.parse(localStorage.getItem("exerciseTimes")) || {}
  );
  const [tempExerciseTimes, setTempExerciseTimes] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // ✅ New state for success message

  useEffect(() => {
    localStorage.setItem("exerciseTimes", JSON.stringify(exerciseTimes));
  }, [exerciseTimes]);

  const buttonLabels = [15, 30, 45, 60];

  const handleAddTime = (minutes) => {
    setTempExerciseTimes((prevTimes) => ({
      ...prevTimes,
      [selectedExercise.name]: (prevTimes[selectedExercise.name] || 0) + minutes,
    }));
    setSuccessMessage(""); // ✅ Clear success message when adding new time
  };

  const handleConfirmTime = () => {
    const addedMinutes = Object.values(tempExerciseTimes).reduce((acc, time) => acc + time, 0); // ✅ Get total added time
    setExerciseTimes((prevTimes) => {
      const updatedTimes = {
        ...prevTimes,
        ...tempExerciseTimes,
      };
      localStorage.setItem("exerciseTimes", JSON.stringify(updatedTimes));
      return updatedTimes;
    });

    setSuccessMessage(`Successfully added ${addedMinutes} minutes to profile!`); // ✅ Show success message
    setTempExerciseTimes({});
  };

  const handleReset = () => {
    setTempExerciseTimes({});
    setSuccessMessage(""); // ✅ Clear success message when resetting
  };

  const navigate = useNavigate();

  return (
    <div className="main-container">
      <Header />

      <div className="content">
      {successMessage && <div className="success-message">{successMessage}</div>}

        <div className="title">
          <h1>What exercise are you doing today?</h1>

          <Carousel exercises={exercises} onExerciseSelect={setSelectedExercise} />

          <div className="time-buttons">
            {buttonLabels.map((minutes) => (
              <Button key={minutes} text={`${minutes} minutes`} onClick={() => handleAddTime(minutes)} />
            ))}
          </div>

          <ExerciseTimeTracker selectedExercise={selectedExercise} exerciseTimes={tempExerciseTimes} />

          {/* ✅ Success Message Section */}

          <div className="action-buttons">
            <button className="reset-button" onClick={handleReset}>
              Reset
            </button>
            <button className="confirm-button" onClick={handleConfirmTime}>
              Add Time
            </button>
          </div>
          <button className="chatbot-button" onClick={() => navigate("/chatbot")}>
            Need Help? Ask Our Bot for Advice!
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainPage;
