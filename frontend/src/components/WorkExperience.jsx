import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';

import ResumeController from '../controllers/ResumeController';
import {DataContext} from "../contexts/DataContext";
import localForage from "localforage";

class WorkExperience extends Component {
    original
    constructor(props) {
        super(props);
        if (this.props.defaultInfo !== null) {
            let defaultInfo = this.props.defaultInfo
            this.state = {
                isEditing: true,
                jobTitle: defaultInfo.jobTitle,
                company: defaultInfo.company,
                country: defaultInfo.country,
                from: defaultInfo.from,
                to: defaultInfo.to,
                description: defaultInfo.description
            };
        } else {
            this.state = {
                isEditing: true,
                jobTitle: "",
                company: "",
                country: "",
                from: "",
                to: "",
                description: ""
            };
        }

        this.original = this.state

        this.handleInputChange = this.handleInputChange.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.cancle = this.cancle.bind(this);
        this.delete = this.delete.bind(this);
        this.sendData = this.sendData.bind(this);
    }
    isValid (){
        if (this.state.jobTitle == ""
            && this.state.company == ""
            && this.state.country == ""){
            return false;
        }
        return true;
    }

    sendData = (action) => {
        switch (action) {
            case -1:
                this.props.set(null, -1, this.props.index);
                break
            case 1:
                this.props.set({
                    jobTitle: this.state.jobTitle,
                    company: this.state.company,
                    country: this.state.country,
                    from: this.state.from,
                    to: this.state.to,
                    description: this.state.description
                }, 1, this.props.index);
                this.original = this.state
                break
            default:
                this.props.set(null, 0, this.props.index);
                break
        }
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    edit() {
        this.setState({
            isEditing: true,
        });
        console.log(this.state);
    }

    save() {
        this.setState({
            isEditing: false,
        }, () => {
            this.sendData(1);
        });
    }

    async saveTemplate(){
        // if (this.isValid()){
            let userIdContext = await localForage.getItem('userId');
            let info = {
                userId: userIdContext,
                jobTitle: this.state.jobTitle,
                company: this.state.company,
                country: this.state.country,
                from: this.state.from,
                to: this.state.to,
                description: this.state.description
            };

            console.log(info);
            let response = await ResumeController.saveTempWorkExp(info);
            if (response.id !== null || response.id !== undefined) {
                this.save();
                this.setState({
                    error: false,
                });
            } else {
                // return false;
                this.setState({
                    error: true,
                });
            }
        // }
        
    }

    cancle() {
        this.setState({
            isEditing: false,
            jobTitle: this.original.jobTitle,
            company: this.original.company,
            country: this.original.country,
            from: this.original.from,
            to: this.original.to,
            description: this.original.description
        }, () => {
            this.sendData(0);
        });
    }

    delete() {
        this.sendData(-1)
    }

    clearData() {
        this.setState({
            isEditing: !this.state.isEditing,
            jobTitle: "",
            company: "",
            country: "",
            from: "",
            to: "",
            description: ""
        });
    }

    render() {
        return (
            this.state.isEditing
                ? <div className='workExperience' style={{
                    "border": "2px solid gray",
                    "borderRadius": "10px",
                    "padding": "20px",
                    "margin": "auto"
                }}> 
                    {this.state.error ? 
                    <Alert severity="error">Something wrong! Could not load data!</Alert>
                    : ""}
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <TextField required id="jobTitle" name="jobTitle" label="Job Title" fullWidth
                                       value={this.state.jobTitle} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField required id="company" name="company" label="Company" fullWidth
                                       value={this.state.company} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="country" name="country" label="Country" fullWidth
                                       autoComplete="country" value={this.state.country} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField required name="from" label="From" fullWidth value={this.state.from}
                                       onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField required name="to" label="To" fullWidth value={this.state.to}
                                       onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField id="description" name="description" label="Description" fullWidth
                                       placeholder="Your description" multiline rows={7} value={this.state.description}
                                       onChange={this.handleInputChange}/>
                        </Grid>
                    </Grid>
                    <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon/>}
                            style={{"margin": "2px",}} onClick={this.save}>
                        Save
                    </Button>
                    <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon/>}
                            style={{"margin": "2px",}} onClick={this.saveTemplate}>
                        Save Template
                    </Button>
                    <Button variant="outlined" color="secondary" size="small" startIcon={<CloseIcon/>}
                            style={{"margin": "2px",}} onClick={this.cancle}>
                            Cancel
                    </Button>
                    <Button variant="outlined" color="secondary" size="small" startIcon={<CloseIcon/>}
                            style={{"margin": "2px",}}  onClick={this.delete}>
                        Delete
                    </Button>
                </div>
                : <div>
                    <Typography variant="h6" gutterBottom>
                        Personal Information
                    </Typography>
                    <Button variant="outlined" color="primary" size="small" startIcon={<EditIcon/>}
                            onClick={this.edit}>
                        Edit
                    </Button>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <p>Job Title: {this.state.jobTitle}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Company Name: {this.state.company}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Country: {this.state.country}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>From: {this.state.from}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>To: {this.state.to}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Summary: {this.state.description}</p>
                        </Grid>
                    </Grid>
                </div>);
    }
}

export default WorkExperience;
