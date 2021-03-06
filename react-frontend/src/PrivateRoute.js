
// If not: they are redirected to the login page.
import React from 'react'
import AuthenticationService from './services/AuthenticationService'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const isLoggedIn = AuthenticationService.isUserLoggedIn()

  return (
    <Route {...rest}
        render= { (props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute