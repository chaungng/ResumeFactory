import React, {Component} from "react";
import localforage from "localforage";
import {DataContext} from "./DataContext";
import history from "../history";

export class DataProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                loggedIn: false,
                setLoggedIn: this.setLoggedIn,
                userId: null,
                setUserId: this.setUserId,
                username: null,
                setUsername: this.setUsername,
                numOfResume: null,
                setNumOfResume: this.setNumOfResume,
            }
        }
    }

    async componentDidMount() {
        let loggedIn = await localforage.getItem('loggedIn')
        let userId = await localforage.getItem('userId')
        let username = await localforage.getItem('username')
        let numOfResume = await localforage.getItem('numOfResume')
        this.setState(state => {
            state.user.loggedIn = loggedIn
            // return state
        })
        this.setState(state => {
            state.user.userId = userId
            // return state
        })
        this.setState(state => {
            state.user.username = username
            // return state
        })
        this.setState(state => {
            state.user.numOfResume = numOfResume
            // return state
        })
        return this.state;
    }

    setLoggedIn = async (val) => {
        this.setState((state) => {
            state.user.loggedIn = val
            return state
        })
        await localforage.setItem('loggedIn', val)
        history.push('/login')
    }

    setUserId = async (val) => {
        this.setState((state) => {
            state.user.userId = val
            return state
        })
        await localforage.setItem('userId', val)
    }

    setUsername = async (val) => {
        this.setState((state) => {
            state.user.username = val
            return state
        })
        await localforage.setItem('username', val)
    }

    setNumOfResume = async (val) => {
        this.setState((state) => {
            state.user.numOfResume = val
            return state
        })
        await localforage.setItem('numOfResume', val)
    }

    render() {
        return (
            <DataContext.Provider value={this.state}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}