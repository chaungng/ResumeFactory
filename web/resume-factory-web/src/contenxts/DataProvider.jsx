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
                setLoggedIn: this.setLoggedIn
            }
        }
    }

    async componentDidMount() {
        let loggedIn = await localforage.getItem('loggedIn')
        this.setState(state => {
            state.user.loggedIn = loggedIn
            return state
        })
    }

    setLoggedIn = async (val) => {
        this.setState((state) => {
            state.user.loggedIn = val
            return state
        })
        await localforage.setItem('loggedIn', val)
        history.push('/login')
    }

    render() {
        return (
            <DataContext.Provider value={this.state}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}