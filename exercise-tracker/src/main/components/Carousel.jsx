import { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel({ exercises, onExerciseSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    onExerciseSelect(exercises[currentIndex]);
  }, [currentIndex, exercises, onExerciseSelect]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? exercises.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === exercises.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="carousel-container">

      <button onClick={handlePrev} className="carousel-btn">
        &lt;
      </button>

      <div className="image-container"> 
        <img
          src={exercises[currentIndex].image}
          alt={exercises[currentIndex].name}
          className="carousel-image"
        />
        <div className="exercise-name"> 
          {exercises[currentIndex].name}
        </div>
      </div>

      <button onClick={handleNext} className="carousel-btn">
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
