import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

class WorkExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: true,
            jobTitle: "",
            company: "",
            country: "",
            from: "",
            to: "",
            description: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.startEditing = this.startEditing.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
        this.clearEditing = this.clearEditing.bind(this);
    }


    sendData = (isEditing, canceled) => {
        if (isEditing) {
            this.props.workExperiences({
                isEditing: isEditing
            }, canceled, this.props.index);
        } else {
            this.props.workExperiences({
                isEditing: isEditing,
                jobTitle: this.state.jobTitle,
                company: this.state.company,
                country: this.state.country,
                from: this.state.from,
                to: this.state.to,
                description: this.state.description
            }, canceled, this.props.index);
        }
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
        // console.log([event.target.name] + " " + [event.target.value]);
        this.sendData(true);
    }

    startEditing() {
        this.setState({
            isEditing: true,
        });
        console.log(this.state);
    }

    stopEditing() {
        this.setState({
            isEditing: false,
        });
        this.sendData(false, false);
    }

    clearEditing() {
        this.clearData();
        this.sendData(true, true);
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
                            onClick={this.stopEditing}>
                      Save
                    </Button>
                    <Button variant="outlined" color="secondary" size="small" startIcon={<CloseIcon/>}
                            onClick={this.clearEditing}>
                      Cancel
                    </Button>
                </div>
                : <div>
                    <Typography variant="h6" gutterBottom>
                        Personal Information
                    </Typography>
                    <Button variant="outlined" color="primary" size="small" startIcon={<EditIcon/>}
                            onClick={this.startEditing}>
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
