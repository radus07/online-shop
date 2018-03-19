import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min'
import '../node_modules/popper.js/dist/popper.min'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('app'))
registerServiceWorker()
