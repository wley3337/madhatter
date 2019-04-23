import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
//components
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs';
import MainMenu from '../components/MainMenu';

class Main extends Component {
  render() {
    return (
      <div id="main">
        <Switch>
          <Route path='/about' render ={(props)=> <About {...props}/>} />
          <Route path='/projects' component={Projects} />
          <Route path='/blogs' component={Blogs} />
          <Route component={MainMenu}/>
        </Switch>
          <div id="home-icon-div">

          <Link to="/" id="home-link"/>
          </div>
          
        
      </div>
    );
  }
}

export default Main;
