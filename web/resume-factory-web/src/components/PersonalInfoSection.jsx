import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Button, IconButton} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

class PersonalInfoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      summary: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.startEditing = this.startEditing.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log([event.target.name] + " " + [event.target.value]);
  }

  stopEditing() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  startEditing() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    return (
      this.state.isEditing
      ? <div className='personalInfo' style={{
          "border" : "2px solid gray",
          "border-radius" : "10px",
          "padding" : "20px",
          "margin" : "auto"
        }}>
        <Typography variant="h6" gutterBottom="gutterBottom">
          Personal Information
        </Typography>
        <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon />} onClick={this.stopEditing}>
          Save
        </Button>
        <Grid container="container" spacing={3}>
          <Grid item="item" xs={12} sm={6}>
            <TextField required="required" id="firstName" name="firstName" label="First name" fullWidth="fullWidth" autoComplete="given-name" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <TextField required="required" id="lastName" name="lastName" label="Last name" fullWidth="fullWidth" autoComplete="family-name" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <TextField required="required" id="phone" name="phone" label="Phone Number" fullWidth="fullWidth" autoComplete="" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <TextField required="required" id="email" name="email" label="Email" fullWidth="fullWidth" autoComplete="" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <TextField required="required" id="city" name="city" label="City" fullWidth="fullWidth" autoComplete="shipping address-level2" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth="fullWidth" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <TextField required="required" id="zip" name="zip" label="Zip/Postal code" fullWidth="fullWidth" autoComplete="shipping postal-code" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <TextField required="required" id="country" name="country" label="Country" fullWidth="fullWidth" autoComplete="country" value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
          <Grid item="item" xs={12} sm={12}>
            <TextField id="summary" name="summary" label="Summary" fullWidth="fullWidth" placeholder="You can add your summary here" multiline="multiline" rows={7} value={this.state.value} onChange={this.handleInputChange}/>
          </Grid>
        </Grid>
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
            <p>First Name: {this.state.firstName}</p>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <p>Last Name: {this.state.lastName}</p>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <p>Phone: {this.state.phone}</p>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <p>Email: {this.state.email}</p>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <p>Location: {this.state.city}
              {', '}
              {this.state.state}
              {', '}
              {this.state.zip}
              {', '}
              {this.state.country}</p>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <p>Summary: {this.state.summary}</p>
          </Grid>
        </Grid>
      </div>);
  }
}

export default PersonalInfoSection;
