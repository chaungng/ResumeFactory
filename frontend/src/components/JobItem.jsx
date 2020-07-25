import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '4px',
        padding: '4px',
        width: '70%',
    },
    label: {
        margin: theme.spacing(1),
        color: theme.palette.primary.main
    },
    content: {
        margin: theme.spacing(1),
        color: theme.palette.text.primary
    }
}));

const JobItem = ({
                     company,
                     companyLogo,
                     companyUrl,
                     createdAt,
                     id,
                     location,
                     title,
                     type,
                     url
                 }) => {
    const classes = useStyles();

    const [fav, setFav] = useState(false)

    const toggleFav = () => {
        setFav(!fav)
    }

    return (
        <div className={classes.container} index={id}>
            <Paper elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <div className="job-title">
                            <Typography variant="h5" gutterBottom={true} className={classes.label}>
                                {title}
                            </Typography>
                        </div>
                        <div className="job-type">
                            <Typography variant="h6" gutterBottom={true} className={classes.content}>
                                Type: {type}
                            </Typography>
                        </div>
                        <div className="job-location">
                            <Typography variant="h6" gutterBottom={true} className={classes.content}>
                                Location: {location}
                            </Typography>
                        </div>
                        <div className="company-name">
                            <Typography variant="h6" gutterBottom={true} className={classes.content}>
                                Company: {company}
                            </Typography>
                        </div>
                        <div className="github-url">
                            <Typography variant="h6" gutterBottom={true} className={classes.content}>
                                <Link href={url} onClick={() => {
                                    console.info("I'm a button.");
                                }}>
                                    Github Link
                                </Link>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        {
                            fav?<FavoriteIcon onClick={toggleFav}/>:<FavoriteBorderIcon onClick={toggleFav}/>
                        }
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default JobItem;
