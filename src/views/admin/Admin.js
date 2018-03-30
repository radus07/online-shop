import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {adminRoutes} from '@/routes/admin-routes'

const Admin = () => (
  <div className="container">
    <Switch>
      <Redirect exact from={'/admin'} to={'/admin/home'}/>
      {adminRoutes.map((route, i) => <Route path={route.path} component={route.component} key={i}/>)}
    </Switch>
  </div>
)

export default Admin
