/**
 * Created by limuzi on 2017/6/8.
 */
import React, {PropTypes, Component} from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'

import './style.css'

class About extends Component {
    render() {
        return (
            <div>
                <Link to="/App"> 李木子</Link>
            </div>
        )
    }
}

export default About
