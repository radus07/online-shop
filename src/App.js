import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/common/header/Header'
import Web from './views/Web'
import Admin from './views/Admin'

const App = () => (
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

export default App
