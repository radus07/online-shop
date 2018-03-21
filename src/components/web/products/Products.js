import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

export default function Products (props) {
  return (
    <section>
      <Switch>
        {props.routes.map((route, i) =>
          <Route
            path={route.path}
            component={route.component}
            {...props}
            key={i}/>
        )}
        <Redirect exact from={'/products'} to={'/products/all'}/>
      </Switch>
    </section>
  )
}
