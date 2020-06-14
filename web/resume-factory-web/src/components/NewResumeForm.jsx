import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PersonalInfoSection from './PersonalInfoSection';
import WorkExpSection from './WorkExpSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';

class NewResumeForm extends Component {
  render() {
    return (<React.Fragment>
      <div className="" style={{
          "width" : "70%",
          "padding" : "10px",
          "margin" : "auto"
        }}>

        <Grid container="container" spacing={3}>
          <Grid item="item" xs={12} sm={10}>
            <Typography variant="h4" gutterBottom="gutterBottom">
              New Resume Form
            </Typography>
          </Grid>
          <Grid item="item" xs={12} sm={1}>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Grid>
          <Grid item="item" xs={12} sm={1}>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>

        <PersonalInfoSection/>
        <WorkExpSection/>
        <SkillsSection/>
        <EducationSection/>

      </div>
    </React.Fragment>);
  }
}

export default NewResumeForm;
