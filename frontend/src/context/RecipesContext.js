import { createContext, useReducer } from 'react'

export const RecipesContext = createContext()
// Reducer function for managing state changes.
// Takes the current state and an action,
// Returns a new state based on the action type.
export const recipesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return {
        recipes: action.payload
      }
    case 'CREATE_RECIPE':
      return {
        recipes: [action.payload, ...state.recipes]
      }
    case 'DELETE_RECIPE':
      return {
        recipes: state.recipes.filter(w => w._id !== action.payload._id)
      }
    default:
      return state
  }
}
// Define a context provider component for recipes.
// Uses useReducer to manage state with recipesReducer.
// Initializes state with an empty array of recipes.
// Provides state and dispatch function to its children components.

export const RecipesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, {
    recipes: []
  })

  return (<RecipesContext.Provider value={{ ...state, dispatch }}>
    {children}
  </RecipesContext.Provider>
  )
}


