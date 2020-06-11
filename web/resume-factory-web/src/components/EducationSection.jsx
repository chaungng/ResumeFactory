import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function EducationSection() {

  return (<div className='education' style={{
      "border" : "2px solid gray",
      "border-radius" : "10px",
      "padding" : "20px",
      "margin" : "auto"
    }}>
    <Typography variant="h6" gutterBottom="gutterBottom">
      Education
    </Typography>
    <button onClick={null}>Save Education</button>
    <Grid container="container" spacing={3}>
      <Grid item="item" xs={12} sm={12}>
        <TextField required="required" id="degree" name="degree" label="Degree" fullWidth="fullWidth"/>
      </Grid>
      <Grid item="item" xs={12} sm={4}>
        <TextField required="required" id="school" name="school" label="School" fullWidth="fullWidth"/>
      </Grid>
      <Grid item="item" xs={12} sm={4}>
        <TextField required="required" name="from" label="From" fullWidth="fullWidth"/>
      </Grid>
      <Grid item="item" xs={12} sm={4}>
        <TextField required="required" name="to" label="To" fullWidth="fullWidth"/>
      </Grid>
      <Grid item="item" xs={12} sm={12}>
        <TextField id="description" name="description" label="Description" fullWidth="fullWidth" placeholder="Your description" multiline="multiline" rows={7}/>
      </Grid>
    </Grid>
  </div>);
}

export default EducationSection;
