/*
 * The following class is a "workout" class
 * that will display the data shown from the selcted workouts;
 * those of which are determined but coul dbe made into a user input
 * that would ask the user specific detailed selections for their duration, type, 
 * and the name of the exerise. 
 * 
 */

 // we'll use a hash map later to out all of the selected values and options we want in to
 // a big sport to store data. 
 // when we need to call upon them, it will give the three areas of information
 // for what the user has done during the week.


//importing hashmap
//We will  extend the HashMap where necessary, mostly for the different time intervals.

/*
 * General Notes:
 * the HashMap would have had to have set or user input data
 * that could be used to display the time totals,
 * the type of workout it was for the them
 * 
 */

import java.util.HashMap;

public class ExerciseTracker{
    protected HashMap<String, Integer> dailyProgress;
    protected HashMap<String, Integer> weeklyProgress;

    public ExerciseTracker{()
        dailyProgress = newHashMap<>();
        weeklyProgress = newHashMap<>();

    }
//Our Beloved weekly and daily workout totals
// heavily repeated 
    public void newWorkout(String date, String week, int duration){
         dailyProgress.put(date, dailyProgress.getorDefault(date,0)+ duration);
//check for if our actual dates are starting from the absolute
// Date that fits with the senario of our map.
        weeklyProgress.put(date, weeklyProgress.getorDefault(week,0)+ duration)
       
    }
// using our dailyprogress values and setting it to only the dates starting
// starting from the very first date.
    public int getDailyprogress(String date){
        return dailyProgress.getorDefault(date,0);
    
    }
// using our weeklyprogress values and setting it to only the weeks starting
// starting from the very first week eg; week one etc..
    public int getWeeklyProgress(String week){
        return weeklyProgress.getorDefault(week, 0);

    }
}

class Exercises{
    protected String exerciseName;
    protected int duration;
    protected String exerciseType;
}

public Exercise(String exerciseName, int duration, String exerciseName){
    this.exerciseName = exerciseName;
    this.duration = duration;
    this.exerciseType = exerciseType;
} 
/*
 * Could put a scanner that takes user input 
 * and then use fnctions to add and tally the total amount of minutes done with each
 * then after tallying them, we could display it which ever data that is stored that we want.
 */
// Public getters and setters used for our exercise duration, type, and name of exercise.

public String getExerciseName(){return exerciseName;}
public void setExerciseName(String exerciseName){this.exerciseName = exerciseName;}

public String getExerciseType(){return exerciseType;}
public void setExerciseType(String exerciseType){this.exerciseType = exerciseType;}

public int getDuration(){return duration;}
public void setDuration(int duration){this.duration = duration;}

// Override function that will use the getters and setter functions when called

@Override
public String toString() {
    return "Workout{" +
            "exerciseName='" + exerciseName + '\'' +
            ", duration=" + duration + " Minutes" +
            ", exerciseType='" + exerciseType + '\'' +
            '}';
}

    
// really is based on the VERY specific values that is going to be used eg: 
// 45 minutes of "Rock - climbers" with focus towards abs.


// following test printing function
public class WorkoutTest{
    public static void main(String[] args){
        Workout workout;
        workout = newWorkout("push ups", 15, "Chest");
        system.out.println(workout);
        
}
// If the above is consistent it will display the name of the workout.
// The duration fo time in muntes of said workout.
// and the area of focus that the workout works on.
}
 
