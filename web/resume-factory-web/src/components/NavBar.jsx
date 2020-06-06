import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import history from './../history';
import MenuBar from './MenuBar';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
      openLogin: false,
      openSignUp: false
    };

    this.onClickMenuButton = this.onClickMenuButton.bind(this);
    this.onClickAwayMenuButton = this.onClickAwayMenuButton.bind(this);
  }

  onClickMenuButton() {
    console.log("onClick: MenuButton is clicked");
    this.setState({
      openMenu: !this.state.openMenu
    });
  }

  onClickAwayMenuButton() {
    console.log("onClickAway: MenuList is closed");
    this.setState({openMenu: false});
  }

  render() {
    return (<AppBar position="static">

      <Toolbar>
        <ClickAwayListener onClickAway={this.onClickAwayMenuButton}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.onClickMenuButton}>
            <MenuIcon/>
          </IconButton>
        </ClickAwayListener>

        <Typography variant="h6">
          <Button color="inherit" onClick={() => history.push('/')}>
            Resume Factory
          </Button>
        </Typography>

        <Button color="inherit" onClick={() => history.push('/login')}>
          Login</Button>
        <Button color="inherit" onClick={() => history.push('/signup')}>
          Sign Up</Button>
      </Toolbar>
      {
        this.state.openMenu
          ? <MenuBar/ >: null}
    </AppBar>);
  }
}
