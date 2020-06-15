import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PersonalInfoSection from './PersonalInfoSection';
import WorkExpSection from './WorkExpSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';

import ResumeServices from '../Services/ResumeServices';
import Resume from '../models/Resume';

class NewResumeForm extends Component {

  resumeService = null;

  state = {personalInfo : null};

  getPersonalInfo = (childData) =>{
    this.setState(
      {personalInfo: childData}
    );
  }

  constructor(){
    super();
    this.resumeService = new ResumeServices();
  }
  createNewResume(data){
    if (this.resumeService === null || this.resumeService === undefined){
      this.resumeService = new ResumeServices();
    }
    if (resume === null || resume === undefined){
      console.log("null ");
      console.log(this.state)
      return;//error
    } else {
      var resume : Resume = this.prepareResume(data);
      this.resumeService.createNewResume(resume);
    }
    
  }

  prepareResume(){
    console.log(this.state.personalInfo);
    // if (this.state.personalInfo.isEditing){
    //   return "Error";
    // } else {

    // }
  }

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
            <Button variant="contained" color="primary" onClick={()=>this.prepareResume()}>
              Save
            </Button>
          </Grid>
        </Grid>

        <PersonalInfoSection personalInfo = {this.getPersonalInfo}/>
        <WorkExpSection/>
        <SkillsSection/>
        <EducationSection/>

      </div>
    </React.Fragment>);
  }
}

export default NewResumeForm;
