import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import MediaQuery from 'react-responsive'
//components
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs';
import MainMenu from '../components/MainMenu';
import HomeButton from '../components/HomeButton'

class Main extends Component {
  state ={ subMenu: 0}


  redirectTo = () =>{
    switch(this.state.subMenu){
      case 0:
      this.setSubMenu(null)
      return <Redirect to="/about/in-a-nutshell"/>
      case 1: 
      this.setSubMenu(null)
      return <Redirect to="/projects/"/>
      case 2: 
      this.setSubMenu(null)
      return <Redirect to="/blogs"/>
      default:
      return null

    }
  }

  setSubMenu=(e)=>{
    this.setState({ subMenu: e})
  } 

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
                  <Route render={()=><MainMenu setSubMenu={this.setSubMenu}/>}/>
            <div id="main">
                <Switch>
                  <Route path='/about' render ={(props)=> <About {...props}/>} />
                  <Route path='/projects' component={Projects} />
                  <Route path='/blogs' component={Blogs} />
                  <Route path='/' render ={(props)=> <About {...props}/>} />
                </Switch>
              {this.redirectTo()}
            </div>
          </div>
        </MediaQuery>
      </React.Fragment>
     
    );
  }
}

export default Main;
