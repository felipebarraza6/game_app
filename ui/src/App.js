
import React, { useReducer, useEffect, createContext } from 'react'
import { reducer } from './reducers/login'

//Containers
import Login from './containers/Login'
import Home from './containers/Home'

export const AuthContext = createContext()


function App() {

  const initialState = {
    isAuthenticated: false,
    access_token: null,
    user: null
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {

    const access_token = JSON.parse(localStorage.getItem('access_token') || null)
    const user = JSON.parse(localStorage.getItem('user') || null)


    if(user && access_token){
      dispatch({
        type: 'LOGIN',
        payload: {
          access_token,
          user
        }
      })
    }

  }, [])

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div className="App">
        {!state.isAuthenticated ? <Login /> : <Home /> }
      </div>
    </AuthContext.Provider>
  )
}

export default App