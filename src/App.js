import React, { Component } from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
        <Sidebar></Sidebar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter>
            <div className="container">
                <Route exact path="/" component={Hello}/>
                <Route path="/sub" component={Sub}/>
            </div>
        </BrowserRouter>
    </div>
    );
  }
}

class Sidebar extends Component {
    render () {
        return (
            <div className="Sidebar">
                <a class="btn-floating btn-large waves-effect waves-light blue lighten-2"><i class="material-icons">add</i></a>
            </div>
        )
    }
}

class Hello extends Component {
    render() {
        return (
            "Hello World!"
        );
    }
}

class Sub extends Component {
    render() {
        return (
            "Sub Component"
        );
    }
}

export default App;
