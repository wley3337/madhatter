import React, { Component } from 'react';
import { Route } from 'react-router-dom'
//components
import About from './About'

class Main extends Component {
  render() {
    return (
      <div className="App">
        <p>up and running </p>
        <Route path='/about/:pathDetail' render={(props) => <About {...props}/>} />
      </div>
    );
  }
}

export default Main;
