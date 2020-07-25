import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

class EducationSection extends Component {
    constructor(props) {
        super(props);
        if (this.props.defaultInfo !== null) {
            let defaultInfo = this.props.defaultInfo
            this.state = {
                isEditing: true,
                degree: defaultInfo.degree,
                school: defaultInfo.school,
                from: defaultInfo.from,
                to: defaultInfo.to,
                description: defaultInfo.description,
            };
        } else {
            this.state = {
                isEditing: true,
                degree: "",
                school: "",
                from: "",
                to: "",
                description: "",
            };
        }


        this.handleInputChange = this.handleInputChange.bind(this);
        this.startEditing = this.startEditing.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
        this.clearEditing = this.clearEditing.bind(this);
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
        this.sendData(true);
    }

    stopEditing() {
        this.setState({
            isEditing: false,
        });
        this.sendData(false);
    }

    clearEditing() {
        this.initData();
        this.sendData(true);
    }

    sendData = (isEditing) => {
        this.props.set({
            isEditing: isEditing,
            degree: this.state.degree,
            school: this.state.school,
            from: this.state.from,
            to: this.state.to,
            description: this.state.description,
        });
    }

    initData() {
        this.setState({
            isEditing: true,
            degree: "",
            school: "",
            from: "",
            to: "",
            description: "",
        });
    }

    render() {
        return (
            this.state.isEditing
                ?
                <div className='education' style={{
                    "border": "2px solid gray",
                    "borderRadius": "10px",
                    "padding": "20px",
                    "margin": "auto"
                }}>
                    <Typography variant="h6" gutterBottom>
                        Education
                    </Typography>
                    <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon/>}
                            onClick={this.stopEditing}>
                        Save Education
                    </Button>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <TextField required id="degree" name="degree" label="Degree" fullWidth value={this.state.degree}
                                       onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField required id="school" name="school" label="School" fullWidth value={this.state.school}
                                       onChange={this.handleInputChange}/>
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
                </div>
                :
                <div>
                    <Typography variant="h6" gutterBottom>
                        Education
                    </Typography>
                    <Button variant="outlined" color="primary" size="small" startIcon={<EditIcon/>}
                            onClick={this.startEditing}>
                        Edit
                    </Button>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <p>Degree: {this.state.degree}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>School: {this.state.school}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>From: {this.state.from}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>To: {this.state.to}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Description: {this.state.description}</p>
                        </Grid>
                    </Grid>
                </div>);
    }

}

export default EducationSection;
