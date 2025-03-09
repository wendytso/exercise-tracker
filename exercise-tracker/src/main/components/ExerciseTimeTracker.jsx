import "./ExerciseTimeTracker.css";

function ExerciseTimeTracker({ selectedExercise, exerciseTimes }) {
  const totalMinutes = exerciseTimes[selectedExercise.name] || 0;
  return (
    <div className="exercise-time-tracker">
      <h3>Total Time</h3>
      <div className="exercise-title">Exercise: {selectedExercise.name}</div>
      <div className="time-display">
        <div className="time-box">{totalMinutes}</div>
        <span className="minutes-label">minutes</span>
      </div>
    </div>
  );
}

export default ExerciseTimeTracker;
