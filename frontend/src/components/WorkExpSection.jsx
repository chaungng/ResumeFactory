import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import WorkExperience from './WorkExperience';

class WorkExpSection extends Component {
  workExperiencesArr = new Array();
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      workExperiences: this.workExperiencesArr,
    };

    this.handleAddExperience = this.handleAddExperience.bind(this);
  }

  handleAddExperience() {
    this.setState({
      isClicked: !this.state.isClicked,
      workExperiences: this.workExperiencesArr,
    });
  }

  getWorkExperience = (childData) => {
    if (!childData.isEditing){
      this.workExperiencesArr.push(childData);
      console.log(this.workExperiencesArr);
    } else {
      return;//flag to indicate it is being edited
    }
    this.setState({
      workExperiences : this.workExperiencesArr,
    });
    console.log(this.state);
    this.sendData();
  }

  sendData =()=>{
    this.props.workExperiences({
      workExperiences: this.state.workExperiences,
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
          ? <WorkExperience workExperiences = {this.getWorkExperience}/>
          : null
      }
    </div>);
  }
}

export default WorkExpSection;
