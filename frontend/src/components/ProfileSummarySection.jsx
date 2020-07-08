import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import localForage from "localforage";
import history from './../history';
import UserController from '../controllers/UserController';

export default class ProfileSummarySection extends Component{

    constructor(props){
        super(props);
        this.state = {
            isEditable: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onEditClicked = this.onEditClicked.bind(this);
        this.onSaveClicked = this.onSaveClicked.bind(this);
        this.onCancelClicked = this.onCancelClicked.bind(this);
    }

    async updateData(data){
        await localForage.setItem('username', data.userName);
        // await localForage.setItem('numOfResume', 0);
        await localForage.setItem('title', data.title);
        await localForage.setItem('location', data.location);
        await localForage.setItem('firstName', data.firstName);
        await localForage.setItem('lastName', data.lastName);

        this.setState({
            userName: data.userName,
            title: data.title,
            location: data.location,
            firstName: data.firstName,
            lastName: data.lastName,
        });
    }

    async componentDidMount() {
        try {
            const loggedIn = await localForage.getItem('loggedIn');
            
            if (loggedIn) {
                const userId = await localForage.getItem('userId');
                const username = await localForage.getItem('username');
                const numOfResume = await localForage.getItem('numOfResume');
                const title = await localForage.getItem('title');
                const location = await localForage.getItem('location');
                const firstName = await localForage.getItem('firstName');
                const lastName = await localForage.getItem('lastName');
                this.setState({
                    loggedIn: true, 
                    userId: userId,
                    userName: username,
                    numOfResume: numOfResume,
                    title: title,
                    location: location,
                    firstName: firstName,
                    lastName: lastName,
                })
            } else {
                history.push('/login')
            }
        } catch (err) {
            // This code runs if there were any errors.
        }
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    onSaveClicked(){
        this.setState({
            isEditable: false,
        });
        console.log(this.state);
        this.updateInformation();

    }

    onEditClicked(){
        this.setState({
            isEditable: true
        });
    }
    onCancelClicked(){
        this.setState({
            isEditable: false
        });
    }

    async updateInformation(){
        console.log(this.state.title);
        var id = this.state.userId;
        var firstName = this.state.firstName;
        var lastName = this.state.lastName;
        var location = this.state.location;
        var title = this.state.title;

        var result = await UserController.updateBasicInfo(id, firstName, lastName, location, title);
        // console.log(result);
        //Update localForage
        await this.updateData(result);
    }

    render(){
        return(
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        {this.state.isEditable 
                            ?
                        <Paper>
                            <TextField required={true} id="firstName" name="firstName" label="firstName" fullWidth="fullWidth" autoComplete={this.state.firstName} value={this.state.firstName} onChange={this.handleInputChange}/>
                            <TextField required={true} id="lastName" name="lastName" label="Last Name" fullWidth="fullWidth" autoComplete={this.state.lastName} value={this.state.lastName} onChange={this.handleInputChange}/>
                            <TextField required={true} id="title" name="title" label="Title" fullWidth="fullWidth" autoComplete={this.state.title} value={this.state.title} onChange={this.handleInputChange}/>
                            <TextField required={true} id="location" name="location" label="Location" fullWidth="fullWidth" autoComplete={this.state.location} value={this.state.location} onChange={this.handleInputChange}/>
                            <button onClick={this.onSaveClicked}>
                                Save
                            </button>
                            <button onClick={this.onCancelClicked}>
                                Cancel
                            </button>
                        </Paper>
                        : <Paper>
                            <h2>Name: {this.state.firstName + ' ' + this.state.lastName}</h2>
                            <p>Title: {this.state.title}</p>
                            <p>Location: {this.state.location}</p>
                            <button onClick={this.onEditClicked}>
                                Edit
                            </button>
                        </Paper>}
                    </Grid>

                    <Grid item xs={3}>
                        <Paper>
                            <p>Number of Resumes:</p>
                            <h2>{(this.state.numOfResume == null) ? 0 : this.state.numOfResume}</h2>
                        </Paper>
                    </Grid>
                </Grid>
            </div> 
        );
    }

}