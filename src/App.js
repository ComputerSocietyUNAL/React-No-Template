import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './components/Main'


export default class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Main/>
        </div>
      </Router>
    );
  }
}

