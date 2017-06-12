/**
 * Created by limuzi on 2017/6/8.
 */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Member from './pages/Member/member'
import MemberDetail from './pages/MemberDetail/MemberDetail'


const Routes =() =>(
    <Router>
        <div>
        <Route exact path='/' component={Member}/>
        <Route path='/MemberDetail' component={MemberDetail}/>
        </div>
    </Router>
)

export default Routes
