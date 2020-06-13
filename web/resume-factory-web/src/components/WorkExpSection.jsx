import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import WorkExperience from './WorkExperience';

class WorkExpSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.handleAddExperience = this.handleAddExperience.bind(this);
  }

  handleAddExperience() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    return (<div className='workExperience' style={{
        "border" : "2px solid gray",
        "border-radius" : "10px",
        "padding" : "20px",
        "margin" : "auto"
      }}>
      <Typography variant="h6" gutterBottom="gutterBottom">
        Work experience
      </Typography>
      <Button variant="outlined" color="primary" size="small" startIcon={<AddIcon />} onClick={this.handleAddExperience}>
        Add Experience
      </Button>
      {
        this.state.isClicked
          ? <WorkExperience/>
          : null
      }
    </div>);
  }
}

export default WorkExpSection;
