import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

// Reducer function that takes in a state and an action and returns a new state
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

// Creating a context provider, children corresponds to the components that will be wrapped by the provider
export const AuthContextProvider = ({ children }) => {
  // useReducer is a hook that returns a state and a dispatch function (which is above in the authReducer function)
  const [state, dispatch] = useReducer(authReducer, { 
    user: null //null basically means that the user is not logged in
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user){
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, [])

  //log when user logs in or logs out
  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}