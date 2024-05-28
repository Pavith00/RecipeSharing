import { useEffect } from "react" //to fetch data from backend.useEffect - function and an array of dependencies. dependencies determine when the effect should run.If empty-effect runs only once after the initial render.If there are dependencies listed, the effect will run when any of those dependencies change.
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "../components/RecipeDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()   //pass json

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json}) //set workout bcoz need to update the entire array of workout and payload going to be the full array of workouts
      }
    }

    fetchWorkouts()
  }, [dispatch])   //whenever dispatch changes, the effect will run again.

  return (
    <div className="home">
      <div className="workouts">
        
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home

//it gives error in browser when backend and frontend run on diff servers. to avoid this install cores pkg or add proxy into frontend pkg.json
/*cycle throuth the workouts.each individual workout return to templates 
{workouts && workouts.map(() => (workout)<-because retun use () instead of {}. only if have value for workouts then start to map. this workouts.map(()  run. access individual workouts.. => (workout)
          <p key={workout._id} //key need to be unique>{workout.title}//output the workout title</p>
        ))} 
        
        insted of output title going to output bit more template. that why create component as workoutdetails.js

        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />    workout={workout  //whole workout object} 
        ))}
        */