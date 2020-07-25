import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const SavedJob = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4} sm={4}/>
                <Grid item xs={4} sm={4}>
                    <Typography variant="h4" align="center">
                        My Saved Job
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={4}/>
            </Grid>
        </div>
    );
}

export default SavedJob;