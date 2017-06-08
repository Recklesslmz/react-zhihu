/**
 * Created by limuzi on 2017/6/8.
 */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App'
import About from './components/About'
import NotFound from './components/NotFound'


const Routes =() =>(
    <Router>
        <div>
        <Route path='/App' component={App}/>
        <Route path='/about' component={About}/>
        <Route path='/NotFound' component={NotFound}/>
        </div>
    </Router>
)

export default Routes
