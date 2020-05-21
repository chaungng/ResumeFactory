import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import NavBar from './Components/NavBar';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import HomePage from './Components/HomePage';

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
