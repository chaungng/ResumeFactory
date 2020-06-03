import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ResumeTable from './ResumeTable';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.addNewResume = this.addNewResume.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  addNewResume() {
    alert("I want to add a new resume!");
    console.log("Add new Resume clicked!");
  }

  editProfile() {
    alert("Edit Profile clicked");
    console.log("Edit Profile clicked!");
  }

  render() {
    const classes = this.props;

    return (<div>
      <h1>Profile Summary</h1>
      <div>
        <Grid container="container" spacing={3}>
          <Grid item="item" xs={9}>
            <Paper>
              <h2>Name: Chau Nguyen</h2>
              <p>Software Developer</p>
              <p>Location: New Westminster, BC, Canada</p>
              <button onClick={this.editProfile}>Edit</button>
            </Paper>
          </Grid>

          <Grid item="item" xs={3}>
            <Paper>
              <p>Number of Resumes:</p>
              <h2>100</h2>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Button variant="contained" color="primary" onClick={this.addNewResume}>
        Add new Resume
      </Button>
      <h1>Resume List</h1>
      <ResumeTable/>
    </div>);
  }
}

export default HomePage;
