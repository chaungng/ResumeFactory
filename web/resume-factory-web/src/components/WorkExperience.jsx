import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      jobTitle: "",
      company: "",
      country: "",
      from: "",
      to: "",
      description: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.clearEditing = this.clearEditing.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log([event.target.name] + " " + [event.target.value]);
  }

  startEditing() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  stopEditing() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  clearEditing() {
    this.setState({
      isEditing: !this.state.isEditing,
      jobTitle: "",
      company: "",
      country: "",
      from: "",
      to: "",
      description: ""
    });
  }

  render() {
    return (
      this.state.isEditing
      ? <div className='workExperience' style={{
          "border" : "2px solid gray",
          "border-radius" : "10px",
          "padding" : "20px",
          "margin" : "auto"
        }}>
        <Grid container="container" spacing={3}>
          <Grid item="item" xs={12} sm={12}>
            <TextField required="required" id="jobTitle" name="jobTitle" label="Job Title" fullWidth="fullWidth" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <TextField required="required" id="company" name="company" label="Company" fullWidth="fullWidth" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <TextField required="required" id="country" name="country" label="Country" fullWidth="fullWidth" autoComplete="country" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <TextField required="required" name="from" label="From" fullWidth="fullWidth" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <TextField required="required" name="to" label="To" fullWidth="fullWidth" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={12}>
            <TextField id="description" name="description" label="Description" fullWidth="fullWidth" placeholder="Your description" multiline="multiline" rows={7} value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
        </Grid>
        <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon />} onClick={this.stopEditing}/>
        <Button variant="outlined" color="secondary" size="small" startIcon={<CloseIcon />} onClick={this.clearEditing}/>
      </div>
      : <div>
        <Typography variant="h6" gutterBottom="gutterBottom">
          Personal Information
        </Typography>
        <Button variant="outlined" color="primary" size="small" startIcon={<EditIcon />} onClick={this.startEditing}>
          Edit
        </Button>
        <Grid container="container" spacing={3}>
          <Grid item="item" xs={12} sm={6}>
            <p>Job Title: {this.state.jobTitle}</p>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <p>Company Name: {this.state.company}</p>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <p>Country: {this.state.country}</p>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <p>From: {this.state.from}</p>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <p>To: {this.state.to}</p>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <p>Summary: {this.state.description}</p>
          </Grid>
        </Grid>
      </div>);
  }
}

export default WorkExperience;
