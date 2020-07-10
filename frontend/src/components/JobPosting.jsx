import React from 'react';
import moment from 'moment';

const JobPosting = (props) => {
  const {
    type,
    createdAt,
    company,
    location,
    title,
    companyLogo,
    index
  } = props;

  return (<div className="job-item" index={index + 1}>
    <div className="company-logo">
      <img src={companyLogo} alt={company} width="100" height="100"/>
    </div>
    <div className="job-info">
      <div className="job-title">{title}</div>
      <div className="job-location">
        {location}
        | {type}
      </div>
      <div className="company-name">{company}</div>
    </div>
    <div className="post-info">
      <div className="post-time">
        Posted {moment(new Date(createdAt)).fromNow()}
      </div>
    </div>
  </div>);
};

export default JobPosting;
