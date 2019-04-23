import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
//components
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs';
import MainMenu from '../components/MainMenu';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path='/about' render ={(props)=> <About {...props}/>} />
          <Route path='/projects' component={Projects} />
          <Route path='/blogs' component={Blogs} />
          <Route component={MainMenu}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
