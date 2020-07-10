import React from 'react';
import JobPosting from './JobPosting';

const JobPostingsList = ({ jobPostings }) => {
  return (
    <div className="job-posting">
      {jobPostings.map((job, index) => (
        <JobPosting key={job.id} {...job} index={index} />
      ))}
    </div>
  );
};

export default JobPostingsList;
