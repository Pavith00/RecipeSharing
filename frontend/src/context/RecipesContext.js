import { createContext, useReducer } from 'react'  //createContext function allow to make a new context 

export const RecipesContext = createContext()  //create brand new context.use export bcos need to use this in another file

//check the action type
                          //(previous state,action) 
export const recipesReducer = (state, action) => { 
  switch (action.type) {
    case 'SET_RECIPES':
      return { 
        recipes: action.payload 
      }
    case 'CREATE_RECIPE': 
      return { //returned by this case includes an updated workouts array.
        recipes: [action.payload, ...state.recipes] //action.payload likely contains the data representing the new workout that was created.[action.payload, ...state.workouts] constructs a new array that includes the new workout data (action.payload) at the beginning, followed by the existing workouts from the current state (state.workouts).
      }
    case 'DELETE_RECIPE':
      return { 
        recipes: state.recipes.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const RecipesContextProvider = ({ children }) => {     //provide context to our component tree then component can access it. childeren prop represent whatever component that wraps by workoutcontextprovider
  //reducer hook similler to usestate. const [count, setCount] = useState(0); initializes the state variable count with an initial value of 0, and setCount is used to update the count state when the button is clicked.
  // dispatch(pass object as argument{type:'set_workouts',represent any data need to make that change-payload:[array-{},{}]})
  const [state, dispatch] = useReducer(recipesReducer, { 
    recipes: []
  })
  
  return (   //return template
  //needs to wrap whatever parts of our application needs access to the context.In here wrap whole application so every componenet has access to this context. app component in index.js contain whole application so need to wrap app component. see index.js 
                             //value available to components.value change overtime ccording to added or delete a workout.so pass state value use a hook which is reducer--- const [state, dispatch] = useReducer(reducer, { count: 0 }); useReducer(reducer, { count: 0 }) initializes the state variable with an initial state object { count: 0 }, and the reducer function handles state updates based on dispatched actions (increment and decrement).
  <RecipesContext.Provider value={{ ...state, dispatch }}>   
      { children }
    </RecipesContext.Provider>
  )
}


//...state-means that not only the state object itself is passed but also any properties it contains.
//React Context to update the workout state in a MERN stack application without the need to refresh the page.