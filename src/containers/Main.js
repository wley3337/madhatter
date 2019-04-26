import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
//components
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs';
import MainMenu from '../components/MainMenu';
import HomeButton from '../components/HomeButton'

class Main extends Component {
  render() {
    return (
      <div id="main">
        <Route path="/:any" component={HomeButton}/>
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
