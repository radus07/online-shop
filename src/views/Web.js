import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {webRoutes} from '../routes/web-routes'

export default function Web () {
  return (
    <div className="container">
      <Switch>
        <Redirect exact from={'/'} to={'/home'}/>
        {webRoutes.map((route, i) => <Route path={route.path} component={route.component} key={i}/>)}
      </Switch>
    </div>
  )
}
