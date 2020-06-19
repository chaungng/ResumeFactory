import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';
// import NavBar from './components/NavBar';

import localforage from "localforage";
import {NavBar} from "./components/NavBar";

class App extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        this.setState({loggedIn: await localforage.getItem('loggedIn')})
    }

    render() {
        return (
            <div className="App">
                <NavBar/>
                <Router>
                    <Routes/>
                </Router>
            </div>
        );
    }
}

export default App;
