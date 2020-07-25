import React from 'react';
import JobItem from './JobItem';

const JobsList = ({list}) => list.map(item =>
    <>
        <JobItem key={item.id} {...item}/>
        <br/>
    </>
);

export default JobsList;
