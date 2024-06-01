import { createContext, useReducer } from 'react'

export const UserContext = createContext()

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        users: action.payload
      }
    case 'CREATE_USERS':
      return {
        users: [action.payload, ...state.users]
      }
    case 'DELETE_USERS':
      return {
        users: state.users.filter(w => w._id !== action.payload._id)
      }
    default:
      return state
  }
}
// Define a context provider component for recipes.
// Uses useReducer to manage state with recipesReducer.
// Initializes state with an empty array of recipes.
// Provides state and dispatch function to its children components.

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    users: []
  })

  return (<UserContext.Provider value={{ ...state, dispatch }}>
    {children}
  </UserContext.Provider>
  )
}


