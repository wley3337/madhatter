import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import MediaQuery from 'react-responsive'
//components
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs';
import MainMenu from '../components/MainMenu';
import HomeButton from '../components/HomeButton'

class Main extends Component {
  render() {
    return (
     
      <React.Fragment>
        <MediaQuery maxWidth={750} >
          <div id="main">
              <Route path="/:any" component={HomeButton}/>
              <Switch>
                <Route path='/about' render ={(props)=> <About {...props}/>} />
                <Route path='/projects' component={Projects} />
                <Route path='/blogs' component={Blogs} />
                <Route component={MainMenu}/>
              </Switch>
          </div>
        </MediaQuery>
          
        <MediaQuery minWidth={751} >
          <div id="desktop-background">
                  <Route component={MainMenu}/>
            <div id="main">
                <Switch>
                  <Route path='/about' render ={(props)=> <About {...props}/>} />
                  <Route path='/projects' component={Projects} />
                  <Route path='/blogs' component={Blogs} />
                </Switch>
            </div>
          </div>
        </MediaQuery>
      </React.Fragment>
     
    );
  }
}

export default Main;
