import React, {Component, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PersonalInfoSection from './PersonalInfoSection';
import WorkExpSection from './WorkExpSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import BasicInfoSection from './BasicInfoSection';

import ResumeServices from '../Services/ResumeServices';
import ResumeController from '../controllers/ResumeController';
import {DataContext} from "../contenxts/DataContext";


class ViewResumeForm extends Component {

    static contextType = DataContext;
    resumeService = null;
    state = {
        loaded: false,
        personalInfo: null,
        workExperiences: null,
        educationInfo: null,
        skills: null,
        basicInfo: null,
    };

    constructor(props) {
        super(props);
        this.resumeService = new ResumeServices();
    }

    async componentDidMount() {
        let resumeCRUD = this.context.resumeCRUD
        // let resume = await ResumeController.getResumesById(resumeCRUD.currentResumeId)
        let result = await ResumeController.getResumesById("5ef1335dc337e637a303347d")
        let resume = result.data
        let content = resume.content
        console.log('resume', resume)
        this.setState((state) => {
            state.loaded = true
            state.basicInfo = content.basicInfo
            state.personalInfo = content.personalInfo
            state.workExperiences = content.workExperiences
            state.educationInfo = content.educationInfo
            state.skills = content.skills
            return state
        })

        console.log('state', this.state)
    }

    getPersonalInfo = (childData) => {
        this.setState(
            {personalInfo: childData}
        );
    }
    getWorkExp = (childData) => {
        console.log(childData);
        this.setState(
            {workExperiences: childData}
        );
    }
    getEducationInfo = (childData) => {
        console.log(childData);
        this.setState(
            {educationInfo: childData}
        );
    }
    getSkills = (childData) => {
        console.log(childData);
        this.setState(
            {skills: childData}
        );
    }
    getBasicInfo = (childData) => {
        console.log(childData);
        this.setState(
            {basicInfo: childData}
        );
    }

    prepareResume() {
        console.log(this.state);
        this.createNewResume(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div className="" style={{
                    "width": "70%",
                    "padding": "10px",
                    "margin": "auto"
                }}>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={10}>
                            <Typography variant="h4" gutterBottom>
                                View Resume Form
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Button variant="contained" color="secondary">
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Button variant="contained" color="primary" onClick={() => this.prepareResume()}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                    {this.state.loaded ?
                        <>
                            <BasicInfoSection
                                basicInfo={this.getBasicInfo}
                                defaultInfo={this.state.basicInfo}/>
                            <PersonalInfoSection
                                personalInfo={this.getPersonalInfo}
                                defaultInfo={this.state.personalInfo}/>
                            <WorkExpSection
                                workExperiences={this.getWorkExp}
                                defaultInfo={this.state.workExperiences}/>
                            <SkillsSection
                                skills={this.getSkills}
                                defaultInfo={this.state.skills}/>
                            <EducationSection
                                educationInfo={this.getEducationInfo}
                                defaultInfo={this.state.educationInfo}/>
                        </>
                        :
                        null
                    }

                </div>
            </React.Fragment>
        );
    }
}

ViewResumeForm.contextType = DataContext;
export default ViewResumeForm;
