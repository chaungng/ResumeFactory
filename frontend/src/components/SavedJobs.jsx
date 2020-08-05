import React, {useContext, useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import JobsList from "./JobsList";
import JobPostingController from "../controllers/JobPostingController";
import SavedJobsController from "../controllers/SavedJobsController";
import {DataContext} from "../contexts/DataContext";

const createData = (company, companyLogo, companyUrl, createdAt, id, location, title, type, url, userId, fave, description) => {
    return {
        company,
        companyLogo,
        companyUrl,
        createdAt,
        id,
        location,
        title,
        type,
        url,
        userId,
        fave,
        description
    };
}

const SavedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const {user} = useContext(DataContext)

    useEffect( () => {
        let load = async (userid) => {
            console.log('userid', userid)
            let jobsArray = [];
            const savedJobs = await SavedJobsController.getAll(userid)
            for (const value of savedJobs) {
                console.log(value)
                jobsArray.push(createData(value.company, value.companyLogo, value.companyUrl, value.createdAt, value.id, value.location, value.title, value.type, value.url, userid, true, value.description));
            }

            setJobs(jobsArray);
        }

        if(user.userId != undefined && !loaded) {
            console.log('user 1', user)
            console.log(user.userId)
            load(user.userId)
            setLoaded(true)
        }
    })

    return (
        <div>
            <Grid container spacing={3} alignItems='center' justify='center'>
                <Grid item xs={4} sm={4}/>
                <Grid item xs={4} sm={4}>
                    <Typography variant="h4" align="center">
                        My Saved Job
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={4}/>
            </Grid>
            <Grid container spacing={3} alignItems='center' justify='center'>
                <Grid item xs/>
                <Grid item xs={10}>
                    <JobsList list={jobs}/>
                </Grid>
                <Grid item xs/>
            </Grid>
        </div>
    );
}

export default SavedJob;