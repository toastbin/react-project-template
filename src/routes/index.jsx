import React, { lazy } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Cookies from 'js-cookie'

const AuthComponent = lazy(() => import('../pages/AuthPage/index'))
const LayoutComponent = lazy(() => import('../pages/LayoutPage/index'))

const PrivateRoute = props => {
  const { component: Component, ...rest } = props
  console.log(props);
  return (
    <Route
      {...rest}
      render={props => 
        Cookies.get('token') ? (
          <Component {...props} />
        ) : (
          <Redirect 
            to={{
              pathname: '/auth',
              search: props.location.search,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const Routers = () => (
  <Router>
    <Switch>
      <Route path='/auth' component={AuthComponent} />
      <PrivateRoute component={LayoutComponent} />
    </Switch>
  </Router>
)

export default Routers