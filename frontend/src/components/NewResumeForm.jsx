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
import ResumeController from '../controllers/ResumeController';
// import localForage from "localforage";
import {DataContext} from "../contenxts/DataContext";


class NewResumeForm extends Component {

  resumeService = null;
  ResumeController = new ResumeController();
  state = {
    personalInfo : null,
    workExperiences : null,
    educationInfo: null,
    skills: null,
  };

  static contextType = DataContext;
  // user = useContext(DataContext)
  constructor(){
    super();
    this.resumeService = new ResumeServices();
    // console.log(this.context);
  }

  componentDidMount(){
    // this.user = DataContext;
    const value = this.user;
    console.log(this.user);
  }

  getPersonalInfo = (childData) =>{
    this.setState(
      {personalInfo: childData}
    );
  }
  getWorkExp = (childData) =>{
    console.log(childData);
    this.setState(
      {workExperiences: childData}
    );
  }
  getEducationInfo = (childData) =>{
    console.log(childData);
    this.setState(
      {educationInfo: childData}
    );
  }
  getSkills = (childData) =>{
    console.log(childData);
    this.setState(
      {skills: childData}
    );
  }
  
  async createNewResume(data){
    console.log(this.context);
    let resumeData = {
      userId: this.context.user.userId, 
      content: JSON.stringify(data)
    };

    let response = await this.ResumeController.addNewResume(resumeData);
    
  }

  prepareResume(){
    console.log(this.state);
    // if (this.state.personalInfo.isEditing){
    //   return "Error";
    // } else {

    // }

    this.createNewResume(this.state);
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
        <WorkExpSection workExperiences = {this.getWorkExp}/>
        <SkillsSection skills = {this.getSkills}/>
        <EducationSection educationInfo = {this.getEducationInfo}/>

      </div>
    </React.Fragment>);
  }
}
NewResumeForm.contextType = DataContext;
export default NewResumeForm;
