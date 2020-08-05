import React, {useState, useEffect, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Search from './Search';
import JobsList from './JobsList';
import JobPostingController from '../controllers/JobPostingController';
import {DataContext} from "../contexts/DataContext";
import SavedJobsController from "../controllers/SavedJobsController";

// Function: create data
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

// Custom Hook: re-usable
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

// Styling
const useStyles = makeStyles((theme) => ({
  listContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
}));

// FindJobPage component
const FindJobPage = () => {
  const classes = useStyles();

  // Initiate custom hooks
  const [title, setTitle] = useSemiPersistentState("jobTitle", "developer");
  const [location, setLocation] = useSemiPersistentState("jobLocation", "california");
  const [isFullTime, setIsFullTime] = useSemiPersistentState("isFullTime", false);
  const [jobs, setJobs] = useState([]);

  const {user} = useContext(DataContext)

  // Function: gets jobs list from github API
  async function getJobPostings(jobTitle, jobLocation, isFullTime) {
    var jobsArray = [];

    var searchData = {
      title: jobTitle,
      location: jobLocation,
      isFullTime: isFullTime
    };

    const result = await JobPostingController.searchJobs(searchData);
    const savedJobs = await SavedJobsController.getAll(user.userId)

    let savedJobsSet = new Set()
    for(let item of savedJobs) {
      savedJobsSet.add(item.id)
    }

    for (const [index, value] of result.entries()) {
      jobsArray.push(createData(value.company, value.companyLogo, value.companyUrl, value.createdAt, value.id, value.location, value.title, value.type, value.url, user.userId, savedJobsSet.has(value.id), value.description));
    }

    setJobs(jobsArray);
  };

  // Function: handles changing value in the child component Search.jsx
  const handleChange = (event) => {
    const name = event.target.name;
    switch (name) {
      case "what":
        setTitle(event.target.value);
        break;
      case "where":
        setLocation(event.target.value);
        break;
      case "isFullTime":
        setIsFullTime(event.target.checked);
        break;
    }
  };

  // Function: searchs value in the child component Search.jsx
  const handleSearch = () => {
    getJobPostings(localStorage.getItem("jobTitle"), localStorage.getItem("jobLocation"), localStorage.getItem("isFullTime"));
  }

  return (<div>
    <Search searchTitle={title} searchLocation={location} isFullTime={isFullTime} onSearch={handleSearch} onChange={handleChange}/>
    <div className={classes.listContainer}>
      <JobsList list={jobs}/>
    </div>
  </div>);
}

export default FindJobPage;
