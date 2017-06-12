import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Router,} from 'react-router-dom'
// import Root from './root';
// import App from './App';
// import ParamsExample from './ParamsExample'
// import QueryExample from './QueryExample'
// import ProgrammaticExample from './ProgrammaticExample'
// import FourOFour from './404Example'
import Routes from './routes'
import './index.css';
const app = document.getElementsByTagName('body')[0]
app.style.background= '#ebeef0'

ReactDOM.render(<Routes/>, document.getElementById('root'))
