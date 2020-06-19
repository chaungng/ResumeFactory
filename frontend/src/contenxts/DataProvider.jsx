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
            }
        }
    }

    async componentDidMount() {
        let loggedIn = await localforage.getItem('loggedIn')
        let userId = await localforage.getItem('userId')
        this.setState(state => {
            state.user.loggedIn = loggedIn
            // return state
        })
        this.setState(state => {
            state.user.userId = userId
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
        // history.push('/login')
    }

    render() {
        return (
            <DataContext.Provider value={this.state}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}