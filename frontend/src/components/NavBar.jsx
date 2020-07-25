import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import history from './../history';

import localforage from "localforage";
import {DataContext} from "../contexts/DataContext";

export const NavBar = () => {
    // static
    // contextType = DataContext

    const {user} = useContext(DataContext)


    const onClickMenuButton = () => {
        // this.setState({
        //     openMenu: !this.state.openMenu
        // });
    }

    const logout = () => {
        user.setLoggedIn(false);
        user.setUsername('');
        user.setUsername('');
        user.setNumOfResume(0);
        user.setTitle('');
        user.setLocation('');
    }

    let notLoggedInComponents = (
        [
            <Button
                key="login"
                color="inherit"
                onClick={logout}
            >
                Login
            </Button>,
            <Button
                key="signup"
                color="inherit"
                onClick={() => history.push('/signup')}
            >
                Sign Up
            </Button>,
        ]
    )

    let loggedInComponents = (
        <Button
            color="inherit"
            onClick={async () => {
                await user.setLoggedIn(false)
                await localforage.setItem('loggedIn', false)
                await localforage.setItem('userId', null);
                await localforage.setItem('username', null);
                await localforage.setItem('numOfResume', 0);
                await localforage.setItem('title', null);
                await localforage.setItem('location', null);
                await localforage.setItem('firstName', null);
                await localforage.setItem('lastName', null);
                history.push('/login')
            }}
        >
            Logout
        </Button>
    )


    console.log('nav bar')
    // console.log(this.context)
    // console.log(user.loggedIn)

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={onClickMenuButton}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                    <Button color="inherit" onClick={() => history.push('/')}>
                        Resume Factory
                    </Button>
                </Typography>
                {(user.loggedIn == true) ? loggedInComponents : notLoggedInComponents}
                <Button
                    key="findjob"
                    color="inherit"
                    onClick={() => history.push('/findjob')}
                >
                    Find a Job!
                </Button>
            </Toolbar>
        </AppBar>
    );
}