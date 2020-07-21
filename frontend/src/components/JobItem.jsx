import React from 'react';

const JobItem = ({
  type,
  createdAt,
  company,
  location,
  title,
  companyLogo,
  id
}) => {
  return (<div className="job-item" index={id}>
    <div className="company-logo">
      <img src={companyLogo} alt={company} width="200" height="100"/>
    </div>
    <div className="job-info">
      <div className="job-title">{title}</div>
      <div className="job-type">Type: {type}</div>
      <div className="job-location">Location: {location}
      </div>
      <div className="company-name">Company: {company}</div>
      <div className="create-at">{createdAt}</div>
    </div>
    <hr/>
  </div>);
};

export default JobItem;
