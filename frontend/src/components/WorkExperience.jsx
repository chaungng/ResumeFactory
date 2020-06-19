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
    this.clearData();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.clearEditing = this.clearEditing.bind(this);
  }


  sendData = (isEditing) => {
    if (isEditing){
      this.props.workExperiences({
        isEditing: isEditing,
      });
    } else {
      this.props.workExperiences ( {
        isEditing: isEditing,
        jobTitle: this.state.jobTitle,
        company: this.state.company,
        country: this.state.country,
        from: this.state.from,
        to: this.state.to,
        description: this.state.description
      });
    }
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log([event.target.name] + " " + [event.target.value]);
    this.sendData(true);
  }

  startEditing() {
    this.setState({
      isEditing: true,
    });
    console.log(this.state);
  }

  stopEditing() {
    this.setState({
      isEditing: false,
    });
    this.sendData(false);
  }

  clearEditing() {
    this.clearData();
    this.sendData(true);
  }

  clearData(){
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
            <TextField required="required" id="jobTitle" name="jobTitle" label="Job Title" fullWidth="fullWidth" value={this.state.jobTitle} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <TextField required="required" id="company" name="company" label="Company" fullWidth="fullWidth" value={this.state.company} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <TextField required="required" id="country" name="country" label="Country" fullWidth="fullWidth" autoComplete="country" value={this.state.country} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <TextField required="required" name="from" label="From" fullWidth="fullWidth" value={this.state.from} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <TextField required="required" name="to" label="To" fullWidth="fullWidth" value={this.state.to} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={12}>
            <TextField id="description" name="description" label="Description" fullWidth="fullWidth" placeholder="Your description" multiline="multiline" rows={7} value={this.state.description} onChange={this.handleInputChange}/>
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
