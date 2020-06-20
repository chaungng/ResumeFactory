import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

class BasicInfoSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      title: "",
      level: "",
      company: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.startEditing = this.startEditing.bind(this);
  }

  sendData = () =>{
    var isEditing = (this.state.isEditing) ? true : false;
    this.props.basicInfo({
      isEditing: isEditing,
      title: this.state.title,
      level: this.state.level,
      company: this.state.company,
    });
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    this.sendData();
  }

  stopEditing() {
    this.setState({
      isEditing: !this.state.isEditing
    });
    this.sendData();
  }

  startEditing() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    return (
      this.state.isEditing
      ?<div className='personalInfo' style={{
        "border" : "2px solid gray",
        "border-radius" : "10px",
        "padding" : "20px",
        "margin" : "auto"
      }}>
        <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon />} onClick={this.stopEditing}>
          Save
        </Button>
        <Grid container="container" spacing={3}>
          <Grid item="item" xs={12} sm={4}>
            <TextField required="required" id="title" name="title" label="Resume Title" fullWidth="fullWidth" autoComplete="title" value={this.state.title} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <TextField required="required" id="level" name="level" label="Level" fullWidth="fullWidth" autoComplete="level" value={this.state.level} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <TextField required="required" id="company" name="company" label="Company" fullWidth="fullWidth" autoComplete="" value={this.state.company} onChange={this.handleInputChange}/>
          </Grid>
        </Grid>
      </div>
      : <div>
        <Button variant="outlined" color="primary" size="small" startIcon={<EditIcon />} onClick={this.startEditing}>
          Edit
        </Button>
        <Grid container="container" spacing={3}>
          <Grid item="item" xs={12} sm={4}>
            <p>Title: {this.state.title}</p>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <p>Level: {this.state.level}</p>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <p>Company: {this.state.company}</p>
          </Grid>
        </Grid>
      </div>);
  }
}

export default BasicInfoSection;
