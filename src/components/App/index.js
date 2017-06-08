/**
 * Created by limuzi on 2017/6/8.
 */
import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'

import logo from './logo.svg'
import './style.css'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

            </div>
        )
    }

}

export default App