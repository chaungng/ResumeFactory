import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '50%', // Fix IE 11 issue.
    margin: 'auto',
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  label: {
    margin: '20px',
    textAlign: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function FindJobPage() {
  const classes = useStyles();
  const history = useHistory();

  return (<div className={classes.form}>
    <Grid container="container" spacing={3}>
      <Grid item="item" xs={12}>
        <Typography variant="h4" gutterBottom="gutterBottom" className={classes.label}>
          Find your dream job!
        </Typography>
      </Grid>
      <Grid item="item" xs={12} sm={2}>
        <Typography variant="h5" gutterBottom="gutterBottom" className={classes.label}>
          What?
        </Typography>
      </Grid>
      <Grid item="item" xs={12} sm={4}>
        <Paper component="form" className={classes.paper}>
          <InputBase className={classes.input} placeholder="Type a job"/>
        </Paper>
      </Grid>
      <Grid item="item" xs={12} sm={2}>
        <Typography variant="h5" gutterBottom="gutterBottom" className={classes.label}>
          Where?
        </Typography>
      </Grid>
      <Grid item="item" xs={12} sm={4}>
        <Paper component="form" className={classes.paper}>
          <InputBase className={classes.input} placeholder="Type a location"/>
        </Paper>
      </Grid>
    </Grid>
    <Button variant="contained" color="primary" className={classes.button} startIcon={<SearchIcon />} aria-label="search" type="submit">
      Search
    </Button>
  </div>);
}
