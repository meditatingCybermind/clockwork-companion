import React, { Component } from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar'
import Roller from './components/Tools/Roller/Roller'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Sidebar></Sidebar>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>
                <Route exact path="/" component={Home}/>
                <Route path="/sub" component={Sub}/>
                <Route path="/roll" component={Roller}/>
            </div>
        </BrowserRouter>
    );
  }
}

class Home extends Component {
    render() {
        return (
            <span>"Hello World!"</span>
        );
    }
}

class Sub extends Component {
    render() {
        return (
            <span>"Sub Component"</span>
        );
    }
}

export default App;
