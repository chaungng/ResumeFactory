import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewResumeForm extends Component {
  render() {
    return (<React.Fragment>
      <Typography variant="h4" gutterBottom="gutterBottom">
        New Resume Form

        <Button variant="contained" color="secondary">
          Cancel
        </Button>

        <Button variant="contained" color="primary">
          Save All
        </Button>
      </Typography>

      <div className='personalInfo' style={{
          "width" : "70%",
          "border" : "2px solid gray",
          "border-radius" : "10px",
          "padding" : "20px"
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
      </div>

      <div className='workExperience' style={{
          "width" : "70%",
          "border" : "2px solid gray",
          "border-radius" : "10px",
          "padding" : "20px"
        }}>
        <Typography variant="h6" gutterBottom="gutterBottom">
          Work experience
        </Typography>
        <button onClick={null}>Save Work Experience</button>
        <Grid container="container" spacing={3}>
          <Grid item="item" xs={12} sm={12}>
            <TextField required="required" id="jobTitle" name="jobTitle" label="Job Title" fullWidth="fullWidth"/>
          </Grid>
          <Grid item="item" xs={12} sm={4}>
            <TextField required="required" id="company" name="company" label="Company" fullWidth="fullWidth"/>
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
      </div>

      <div className='education' style={{
          "width" : "70%",
          "border" : "2px solid gray",
          "border-radius" : "10px",
          "padding" : "20px"
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
      </div>

    </React.Fragment>);
  }
}

export default NewResumeForm;
