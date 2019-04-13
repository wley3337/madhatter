import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
//css files
import './css/index.css';
//components
import Main from './containers/Main';

ReactDOM.render(
     <Router>
         <Main />
    </Router>
    , document.getElementById('root')
);

