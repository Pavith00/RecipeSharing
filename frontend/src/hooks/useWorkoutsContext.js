import { WorkoutsContext } from "../context/WorkoutsContext"  //actual context
import { useContext } from "react" //to consume context

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)  //return the value of this context "WorkoutsContext" which is the value passed into the provider component (in workoutcontext.js line 36)

  if(!context) {  //means if we dont have a value for it
    throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
  }

  return context
}

// every time when we want to use our workout data invoke useWorkoutsContext hook and context value back