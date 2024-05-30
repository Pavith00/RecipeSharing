import { RecipesContext } from "../context/RecipesContext"  //actual context
import { useContext } from "react" //to consume context

export const useRecipesContext = () => {
  const context = useContext(RecipesContext)  //return the value of this context "WorkoutsContext" which is the value passed into the provider component (in workoutcontext.js line 36)

  if(!context) {  //means if we dont have a value for it
    throw Error('useRecipesContext must be used inside a RecipesContextProvider')
  }

  return context
}

// every time when we want to use our workout data invoke useWorkoutsContext hook and context value back