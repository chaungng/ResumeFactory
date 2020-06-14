import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function SkillsSection() {

  return (<div className='skills' style={{
      "border" : "2px solid gray",
      "border-radius" : "10px",
      "padding" : "20px",
      "margin" : "auto"
    }}>
    <Typography variant="h6" gutterBottom="gutterBottom">
      Skills
    </Typography>
    <Button onClick={null}>Save Skills</Button>
  </div>);
}

export default SkillsSection;
