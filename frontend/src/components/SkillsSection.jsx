import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Skill from './Skill';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

class SkillsSection extends Component {

  skillsArr = new Array();
  counter = 1;
  
  constructor(props) {
    
    super(props);
    this.skillsArr = new Array();
    this.skillsArr.push("");

    this.state = {
      isClicked: false,
      skills: this.skillsArr,
      skillCounter : this.counter,
    };

    this.handleAddSkill = this.handleAddSkill.bind(this);
  }

  handleAddSkill() {
    this.counter += 1;
    this.setState({
      isClicked: !this.state.isClicked,
      skills: this.skillsArr,
      skillCounter : this.counter,
    });
  }

  getSkill =(childData) =>{
    //skill here
    console.log(childData);
    // if (this.state.skillCounter > 1){
      this.skillsArr.push(childData);
    // } else {
    //   this.skillsArr[0] = childData;
    // }
    // this.props.Skills = {
    //   skills : this.skillsArr,
    // };
    this.setState({
      skills : this.skillsArr,
    });
    this.sendData();
  }

  sendData = () =>{
    this.props.skills = {
      skills : this.state.skills,
    }
  }
  loadSkills(){
    console.log(this.skillsArr);
    this.skillsArr.forEach(element => {
      console.log('kkk');
      console.log(element);
      // <Skill skill = {this.getSkill}></Skill>
    })
  }

  render(){
    return (<div className='skills' style={{
      "border" : "2px solid gray",
      "border-radius" : "10px",
      "padding" : "20px",
      "margin" : "auto"
    }}>
    <Typography variant="h6" gutterBottom="gutterBottom">
      Skills
    </Typography>
    <Button startIcon={<AddIcon />} onClick={this.handleAddSkill}>Add Skills</Button>
      {
        this.state.isClicked
          ? <Skill skill = {this.getSkill}/>
          : null
        // this.skillsArr.forEach(element => {
        //   console.log('kkk');
        //   console.log(element);
        //   // <Skill skill = {this.getSkill}></Skill>
        // })

      }
    <div>
      <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon />} onClick={this.stopEditing}/>
    </div>
  </div>);
  }
  
}

export default SkillsSection;
