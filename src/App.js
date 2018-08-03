import React, { Component } from 'react';
import MySideNav from './Components/sidebar'
import Logo from './assets/TKS-logo.jpg'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="strip">
        <div className="Logo">
        <img src={Logo} alt="logo" height="35"/>
        </div>
        <MySideNav />
      </div>
    );
  }
}

export default App;
