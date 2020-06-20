import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import history from './../history';

import localforage from "localforage";
import {DataContext} from "../contenxts/DataContext";

export const NavBar = () => {
    // static
    // contextType = DataContext

    const {user} = useContext(DataContext)

    const onClickMenuButton = () => {
        this.setState({
            openMenu: !this.state.openMenu
        });
    }

    const logout = () => {
        user.setLoggedIn('false')
    }

    let notLoggedInComponents = (
        [<Button
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
            <Button
                key="findjob"
                color="inherit"
                onClick={() => history.push('/findjob')}
            >
                Find a Job!
            </Button>,]
    )

    let loggedInComponents = (
        <Button
            color="inherit"
            onClick={async () => {
                await user.setLoggedIn(false)
                await localforage.setItem('loggedIn', false)
                history.push('/login')
            }}
        >
            Logout
        </Button>
    )

    console.log('nav bar')
    // console.log(this.context)
    console.log(user)

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
                {user.loggedIn ? loggedInComponents: notLoggedInComponents}
            </Toolbar>
        </AppBar>
    );
}

// export default class NavBar extends React.Component {
//     static contextType = DataContext
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             openMenu: false,
//             openLogin: false,
//             openSignUp: false,
//             loggedIn: false
//         };
//
//         this.onClickMenuButton = this.onClickMenuButton.bind(this);
//     }
//
//     onClickMenuButton() {
//         this.setState({
//             openMenu: !this.state.openMenu
//         });
//     }
//
//     logout = () => {
//         this.context.user.setLoggedIn('false')
//     }
//
//     render() {
//         const {user} = this.context
//
//         let loggedInComponents = (
//             [<Button
//                 key="login"
//                 color="inherit"
//                 onClick={this.logout}
//             >
//                 Login
//             </Button>,
//                 <Button
//                     key="signup"
//                     color="inherit"
//                     onClick={() => history.push('/signup')}
//                 >
//                     Sign Up
//                 </Button>]
//         )
//
//         let notLoggedInComponents = (
//             <Button
//                 color="inherit"
//                 onClick={async () => {
//                     await user.setLoggedIn(false)
//                     await localforage.setItem('loggedIn', false)
//                     history.push('/login')
//                 }}
//             >
//                 Logout
//             </Button>
//         )
//
//         console.log('nav bar')
//         console.log(this.context)
//         console.log(user)
//
//         return (
//             <DataContext.Consumer>
//                 {({user}) => (
//                     <AppBar position="static">
//                         <Toolbar>
//                             <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.onClickMenuButton}>
//                                 <MenuIcon/>
//                             </IconButton>
//                             <Typography variant="h6">
//                                 <Button color="inherit" onClick={() => history.push('/')}>
//                                     Resume Factory
//                                 </Button>
//                             </Typography>
//                             {user.loggedIn && loggedInComponents}
//                             {!user.loggedIn && notLoggedInComponents}
//                         </Toolbar>
//                     </AppBar>
//                 )}
//             </DataContext.Consumer>
//         );
//     }
// }
