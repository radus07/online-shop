import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {webRoutes} from '../routes/web-routes'

const Web = () => (
  <div className="container">
    <Switch>
      <Redirect exact from={'/'} to={'/home'}/>
      {webRoutes.map((route, i) =>
        <Route
          path={route.path}
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
          key={i}/>
      )}
    </Switch>
  </div>
)

export default Web
