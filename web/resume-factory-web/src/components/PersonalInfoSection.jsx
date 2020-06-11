import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function PersonalInfoSection() {

  return (<div className='personalInfo' style={{
      "border" : "2px solid gray",
      "border-radius" : "10px",
      "padding" : "20px",
      "margin" : "auto"
    }}>
    <Typography variant="h6" gutterBottom="gutterBottom">
      Personal Information
    </Typography>
    <button onClick={null}>Save Personal Info</button>
    <Grid container="container" spacing={3}>
      <Grid item="item" xs={12} sm={6}>
        <TextField required="required" id="firstName" name="firstName" label="First name" fullWidth="fullWidth" autoComplete="given-name"/>
      </Grid>
      <Grid item="item" xs={12} sm={6}>
        <TextField required="required" id="lastName" name="lastName" label="Last name" fullWidth="fullWidth" autoComplete="family-name"/>
      </Grid>
      <Grid item="item" xs={12} sm={6}>
        <TextField required="required" id="phone" name="phone" label="Phone Number" fullWidth="fullWidth" autoComplete=""/>
      </Grid>
      <Grid item="item" xs={12} sm={6}>
        <TextField required="required" id="email" name="email" label="Email" fullWidth="fullWidth" autoComplete=""/>
      </Grid>
      <Grid item="item" xs={12} sm={6}>
        <TextField required="required" id="city" name="city" label="City" fullWidth="fullWidth" autoComplete="shipping address-level2"/>
      </Grid>
      <Grid item="item" xs={12} sm={6}>
        <TextField id="state" name="state" label="State/Province/Region" fullWidth="fullWidth"/>
      </Grid>
      <Grid item="item" xs={12} sm={6}>
        <TextField required="required" id="zip" name="zip" label="Zip / Postal code" fullWidth="fullWidth" autoComplete="shipping postal-code"/>
      </Grid>
      <Grid item="item" xs={12} sm={6}>
        <TextField required="required" id="country" name="country" label="Country" fullWidth="fullWidth" autoComplete="shipping country"/>
      </Grid>
      <Grid item="item" xs={12} sm={12}>
        <TextField id="summary" name="summary" label="Summary" fullWidth="fullWidth" placeholder="You can add your summary here" multiline="multiline" rows={7}/>
      </Grid>
    </Grid>
  </div>);
}

export default PersonalInfoSection;
