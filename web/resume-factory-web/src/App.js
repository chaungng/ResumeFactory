import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (<div className="App">
      <Router>
        <NavBar/>
        <Routes/>
      </Router>
    </div>);
  }
}

export default App;
