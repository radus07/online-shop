import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/common/header/Header'
import Web from './views/Web'
import Admin from './views/Admin'

export default function App () {
  return (
    <Router>
      <main>
        <Header/>
        <Switch>
          <Route path={'/admin'} component={Admin}/>
          <Route path={'/'} component={Web}/>
        </Switch>
      </main>
    </Router>
  )
}
