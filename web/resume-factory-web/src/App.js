import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (<div className="App">
      <Router>
        <NavBar/>
        <div className="main-content">
          <Switch>
            <Route exact={true} path='/' component={HomePage}></Route>
            <Route path='/login' component={LoginPage}></Route>
            <Route path='/signup' component={SignUpPage}></Route>
          </Switch>
        </div>
      </Router>
    </div>);
  }
}

export default App;
