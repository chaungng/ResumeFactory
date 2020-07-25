import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

class PersonalInfoSection extends Component {

    constructor(props) {
        super(props);

        if (this.props.defaultInfo !== undefined) {
            let defaultInfo = this.props.defaultInfo
            console.log('per', defaultInfo)
            this.state = {
                isEditing: true,
                firstName: defaultInfo.firstName,
                lastName: defaultInfo.lastName,
                phone: defaultInfo.phone,
                email: defaultInfo.email,
                city: defaultInfo.city,
                state: defaultInfo.state,
                zip: defaultInfo.zip,
                country: defaultInfo.country,
                summary: defaultInfo.summary
            };
        } else {
            this.state = {
                isEditing: true,
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                city: "",
                state: "",
                zip: "",
                country: "",
                summary: ""
            };
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
        this.startEditing = this.startEditing.bind(this);
    }

    sendData = () => {
        this.props.set({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            country: this.state.country,
            summary: this.state.summary,
        });
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        }, this.sendData);
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
                    <Typography variant="h6" gutterBottom>
                        Personal Information
                    </Typography>
                    <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon/>}
                            onClick={this.stopEditing}>
                        Save
                    </Button>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="firstName" name="firstName" label="First name" fullWidth autoComplete="given-name"
                                       value={this.state.firstName} onChange={this.handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="lastName" name="lastName" label="Last name" fullWidth autoComplete="family-name"
                                       value={this.state.lastName} onChange={this.handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="phone" name="phone" label="Phone Number" fullWidth autoComplete=""
                                       value={this.state.phone} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="email" name="email" label="Email" fullWidth autoComplete=""
                                       value={this.state.email} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="city" name="city" label="City" fullWidth autoComplete="shipping address-level2"
                                       value={this.state.city} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="state" name="state" label="State/Province/Region" fullWidth
                                       value={this.state.state} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="zip" name="zip" label="Zip/Postal code" fullWidth autoComplete="shipping postal-code"
                                       value={this.state.zip} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="country" name="country" label="Country" fullWidth autoComplete="country"
                                       value={this.state.country} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField id="summary" name="summary" label="Summary" fullWidth
                                       placeholder="You can add your summary here" multiline rows={7}
                                       value={this.state.summary} onChange={this.handleInputChange}/>
                        </Grid>
                    </Grid>
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
                            <p>First Name: {this.state.firstName}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Last Name: {this.state.lastName}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Phone: {this.state.phone}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Email: {this.state.email}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Location: {this.state.city}
                                {', '}
                                {this.state.state}
                                {', '}
                                {this.state.zip}
                                {', '}
                                {this.state.country}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Summary: {this.state.summary}</p>
                        </Grid>
                    </Grid>
                </div>);
    }
}

export default PersonalInfoSection;
