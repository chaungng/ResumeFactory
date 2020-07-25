import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

class BasicInfoSection extends Component {

    constructor(props) {
        super(props);
        if(this.props.defaultInfo) {
            let defaultInfo = this.props.defaultInfo
            this.state = {
                isEditing: true,
                title: defaultInfo.title,
                level: defaultInfo.level,
                company: defaultInfo.company,
            };
        } else {
            this.state = {
                isEditing: true,
                title: "",
                level: "",
                company: "",
            };
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
        this.startEditing = this.startEditing.bind(this);
    }

    sendData = () => {
        let isEditing = this.state.isEditing;
        this.props.basicInfo({
            isEditing: isEditing,
            title: this.state.title,
            level: this.state.level,
            company: this.state.company,
        });
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
        this.sendData();
    }

    stopEditing() {
        this.setState({
            isEditing: !this.state.isEditing
        });
        this.sendData();
    }

    startEditing() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    render() {
        return (
            this.state.isEditing
                ? <div className='personalInfo' style={{
                    "border": "2px solid gray",
                    "borderRadius": "10px",
                    "padding": "20px",
                    "margin": "auto"
                }}>
                    <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon/>}
                            onClick={this.stopEditing}>
                        Save
                    </Button>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <TextField required id="title" name="title" label="Resume Title"
                                       fullWidth autoComplete="title" value={this.state.title}
                                       onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField required id="level" name="level" label="Level" fullWidth
                                       autoComplete="level" value={this.state.level} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField required id="company" name="company" label="Company" fullWidth
                                       autoComplete="" value={this.state.company} onChange={this.handleInputChange}/>
                        </Grid>
                    </Grid>
                </div>
                :
                <div>
                    <Button variant="outlined" color="primary" size="small" startIcon={<EditIcon/>}
                            onClick={this.startEditing}>
                        Edit
                    </Button>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <p>Title: {this.state.title}</p>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <p>Level: {this.state.level}</p>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <p>Company: {this.state.company}</p>
                        </Grid>
                    </Grid>
                </div>);
    }
}

export default BasicInfoSection;
