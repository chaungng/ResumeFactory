import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ResumeTable from './ResumeTable';
import history from './../history';
import localForage from "localforage";

class HomePage extends Component {

    constructor(props) {
        super(props);


        this.state = {
            editProfileIsOn: false,
            loggedIn: false
        }

        this.addNewResume = this.addNewResume.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }

    async componentDidMount() {
        try {
            const loggedIn = await localForage.getItem('loggedIn');
            if (loggedIn) {
                this.setState({loggedIn: true})
            } else {
                history.push('/login')
            }
        } catch (err) {
            // This code runs if there were any errors.
        }
    }

    addNewResume = () => {
        alert("I want to add a new resume!");
        console.log("Add new Resume clicked!");

        history.push('/newresume');
    }

    editProfile() {
        alert("Edit Profile clicked");
        console.log("Edit Profile clicked!");
    }

    render() {
        if (!this.state.loggedIn) return null

        return (
            <div>
                <h1>Profile Summary</h1>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <Paper>
                                <h2>Name: Chau Nguyen</h2>
                                <p>Software Developer</p>
                                <p>Location: New Westminster, BC, Canada</p>
                                <button onClick={this.editProfile}>
                                    Edit
                                </button>
                            </Paper>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper>
                                <p>Number of Resumes:</p>
                                <h2>100</h2>
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

export default HomePage;
