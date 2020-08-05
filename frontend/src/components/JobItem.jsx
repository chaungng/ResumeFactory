import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '20px',
    padding: '4px',
    width: '70%'
  },
  label: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main
  },
  content: {
    margin: theme.spacing(2),
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
  url,
  description
}) => {
  const classes = useStyles();
  const [fav, setFav] = useState(false);
  const [expand, setExpand] = useState(false);

  const toggleFav = () => {
    setFav(!fav);
  }

  const toggleDescription = () => {
    setExpand(!expand);
  }

  return (<div className={classes.container} index={id}>
    <Paper elevation={3}>
      <Grid container="container" spacing={3}>
        <Grid item="item" xs={10}>
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
        <Grid item="item" xs={1}>
          {
            fav
              ? <FavoriteIcon onClick={toggleFav}/>
              : <FavoriteBorderIcon onClick={toggleFav}/>
          }
        </Grid>
        <Grid item="item" xs={1}>
          {
            expand
              ? <ExpandLessIcon onClick={toggleDescription}/>
              : <ExpandMoreIcon onClick={toggleDescription}/>
          }
        </Grid>
        <Grid item="item" xs={12} spacing={3}>
          {
            expand
              ? <Typography variant="h6" gutterBottom={true} className={classes.content}>
                  <hr/>
                  <div dangerouslySetInnerHTML={{
                      __html: description
                    }}/>
                </Typography>
              : null
          }
        </Grid>
      </Grid>
    </Paper>
  </div>);
};

export default JobItem;
