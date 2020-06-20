import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ResumeTable from './ResumeTable';
import history from './../history';
import localForage from "localforage";
import ResumeController from "../controllers/ResumeController";

class HomePage extends Component {

    constructor(props) {
        super(props);


        this.state = {
            editProfileIsOn: false,
            loggedIn: false,
            userId: null, 
            userName: "",
            numOfResume: 0,
            title : "",
            location : "",
        }

        this.addNewResume = this.addNewResume.bind(this);
        this.editProfile = this.editProfile.bind(this);
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
                this.setState({
                    loggedIn: true, 
                    userId: userId,
                    username: username,
                    numOfResume: numOfResume,
                    title: title,
                    location: location,
                })
            } else {
                history.push('/login')
            }
        } catch (err) {
            // This code runs if there were any errors.
        }
    }

    addNewResume = () => {
        // alert("I want to add a new resume!");
        console.log("Add new Resume clicked!");

        history.push('/newresume');
    }

    editProfile() {
        alert("Edit Profile clicked");
        console.log("Edit Profile clicked!");
    }

    render() {
        console.log(this.state);
        if (this.state.loggedIn == false
            && this.state.userId !== null){
            return null
        } else {
            return (
                <div>
                    <h1>Profile Summary</h1>
                    <div>
                        <Grid container spacing={3}>
                            <Grid item xs={9}>
                                <Paper>
                                    <h2>Name: {this.state.username}</h2>
                                    <p>{this.state.title}</p>
                                    <p>Location: {this.state.location}</p>
                                    <button onClick={this.editProfile}>
                                        Edit
                                    </button>
                                </Paper>
                            </Grid>
    
                            <Grid item xs={3}>
                                <Paper>
                                    <p>Number of Resumes:</p>
                                    <h2>{(this.state.numOfResume == null) ? 0 : this.state.numOfResume}</h2>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <Button variant="contained" color="primary" onClick={this.addNewResume}>
                        Add new Resume
                    </Button>
                    <h1>Resume List</h1>
                    <ResumeTable/>
                </div>
            );
        }
    }
}

export default HomePage;
