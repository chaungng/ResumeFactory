import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '50%',
    margin: 'auto',
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  label: {
    margin: '10px',
    textAlign: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Search = (props) => {
  const classes = useStyles();

  return (<div className={classes.form}>
    <Grid container={true}>
      <Grid container={true} item={true} xs={12} justify="center">
        <Typography variant="h4" gutterBottom={true} className={classes.label}>
          Find your dream job!
        </Typography>
      </Grid>
      <Grid container={true} item={true} xs={12} sm={2} justify="center">
        <Typography variant="h5" gutterBottom={true} className={classes.label}>
          What?
        </Typography>
      </Grid>
      <Grid container={true} item={true} xs={12} sm={4} justify="center">
        <Paper component="form" className={classes.paper}>
          <InputBase className={classes.input} placeholder="Type a job" name="what" value={props.searchTitle} onChange={props.onChange}/>
        </Paper>
      </Grid>
      <Grid container={true} item={true} xs={12} sm={2} justify="center">
        <Typography variant="h5" gutterBottom={true} className={classes.label}>
          Where?
        </Typography>
      </Grid>
      <Grid container={true} item={true} xs={12} sm={4} justify="center">
        <Paper component="form" className={classes.paper}>
          <InputBase className={classes.input} placeholder="Type a location" name="where" value={props.searchLocation} onChange={props.onChange}/>
        </Paper>
      </Grid>
    </Grid>
    <br/>
    <FormControl component="fieldset">
      <FormLabel component="legend">Looking for full-time jobs?</FormLabel>
      <FormControlLabel control={<Checkbox
        checked = {
          props.isFullTime ? true : false
        }
        onChange = {
          props.onChange
        }
        name = "isFullTime" />} label="Yes, full-time."/>
    </FormControl>
    <br/>
    <Button variant="contained" color="primary" className={classes.button} startIcon={<SearchIcon />} aria-label="search" type="submit" onClick={props.onSearch}>
      Search
    </Button>
    <br/>
  </div>);
}

export default Search;
