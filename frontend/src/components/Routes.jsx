import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import FindJobPage from './FindJobPage';
import NewResumeForm from './NewResumeForm';
import history from './../history';

export default class Routes extends Component {
  render() {
    return (<Router history={history}>
        <Switch>
          <Route exact={true} path='/' component={HomePage}></Route>
          <Route path='/login' component={LoginPage}></Route>
          <Route path='/signup' component={SignUpPage}></Route>
          <Route path='/findjob' component={FindJobPage}></Route>
          <Route path='/newresume' component={NewResumeForm}></Route>
        </Switch>
    </Router>)
  }
}
