import React, {useState, useEffect} from 'react';
import Search from './Search';
import JobsList from './JobsList';
import JobPostingController from '../controllers/JobPostingController';

function createData(type, createdAt, company, location, title, companyLogo, id) {
  return {
    type,
    createdAt,
    company,
    location,
    title,
    companyLogo,
    id,
  };
}

const FindJobPage = () => {
  const [state, setState] = useState({what: '', where: '', fullTime: false});
  const [jobs, setJobs] = useState([]);

  // Function to get jobs list from github API
  async function getJobPostings() {
      var jobsArray = [];
      const result = await JobPostingController.getJobPostings();
      console.log(result);

      for (const [index, value] of result.entries()) {
        jobsArray.push(createData(value.type, value.createdAt, value.company, value.location, value.title, value.companyLogo, value.id));
      }
      setJobs(jobsArray);
    };

  // Function to handle changing value in the child component Search.jsx
  const handleChange = (event) => {
    const {name, value} = event.target;

    console.log(name);
    console.log(value);

    if (name === 'fullTime') {
      setState((prevState) => ({
        ...state,
        [name]: !prevState.fullTime
      }));
    } else {
      setState({
        ...state,
        [name]: value
      });
    }
  };

  // Function to handle searching in the child component Search.jsx
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Handle Search from parent FindJobPage!");
    getJobPostings();
  };

  return (<div>
    <Search onSearch={handleSearch} onChange={handleChange}/>
    <JobsList list={jobs}/>
  </div>);
}

export default FindJobPage;
