import { useEffect } from "react" //to fetch data from backend.useEffect - function and an array of dependencies. dependencies determine when the effect should run.If empty-effect runs only once after the initial render.If there are dependencies listed, the effect will run when any of those dependencies change.
import { useRecipesContext } from "../hooks/useRecipesContext"

// components
import RecipeDetails from "../components/RecipeDetails"
import RecipeForm from "../components/RecipeForm"
import Login from "../components/Login"

const Home = () => {
  const { recipes, dispatch } = useRecipesContext()

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/api/recipes')
      const json = await response.json()   //pass json

      if (response.ok) {
        dispatch({ type: 'SET_RECIPES', payload: json }) //set workout bcoz need to update the entire array of workout and payload going to be the full array of workouts
      }
    }

    fetchRecipes()
  }, [dispatch])   //whenever dispatch changes, the effect will run again.

  return (
    <div className="home">
      <div className="recipes">
        <div className="hero">
          <div class="p-5 text-center bg-image rounded-3" >
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="image-container">


                <h1 class="mb-3">Anybody Can Cook</h1><br/>
                <h4 class="mb-3">Explore a world of culinary inspiration and savor the joy of <br />cooking with our diverse collection of mouthwatering recipes.</h4><br/>
                <div className=" hero-button">

                  <button type="button" class="hero-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg></button>
                  <input type="text" class="hero-search" placeholder="Type to Search..."></input>
                </div>
              </div>




            </div>
          </div>

        </div>

        {recipes && recipes.map(recipe => (
          <RecipeDetails recipe={recipe} key={recipe._id} />
        ))}
      </div>
      <RecipeForm />
      <Login/>
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