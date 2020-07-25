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
import {DataContext} from "../contexts/DataContext";
import localforage from "localforage";
import localForage from "localforage";


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
        if (resumeCRUD.currentResumeId === -1) {
            let currentResumeId = await localforage.getItem('currentResumeId')
            if(currentResumeId == null) return
            resumeCRUD.setCurrentResumeId(currentResumeId)
        }
        let result = await ResumeController.getResumesById(resumeCRUD.currentResumeId)
        let resume = result.data
        let content = resume.content
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

    async prepareResume() {
        console.log(this.state);
        await this.createNewResume(this.state);
    }

    async createNewResume(data) {
        let resumeData = {
            userId: this.context.user.userId,
            content: JSON.stringify(data),
            title: data.basicInfo.title,
            level: data.basicInfo.level,
            company: data.basicInfo.company
        };

        let response = await ResumeController.addNewResume(resumeData);
        if (response.id !== null || response.id !== undefined) {
            //TODO: handle response in case error
            let count = await ResumeController.getCountResumeByUserId(this.context.user.userId);
            this.context.user.setNumOfResume(count);
            await localForage.setItem('numOfResume', count);
            this.props.history.push('/');
            // return true;
        } else {
            // return false;
        }
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
