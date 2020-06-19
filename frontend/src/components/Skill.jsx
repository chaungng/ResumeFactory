import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

class Skill extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            isEditing: true,
            skillName: "",
            level: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value,
        });
        // console.log([event.target.name] + " " + [event.target.value]);
        // this.sendData(true);
    }
    startEditing() {
        this.setState({
          isEditing: true,
        });
        console.log(this.state);
    }
    
    stopEditing() {
        this.setState({
          isEditing: false,
        });
        this.sendData(false);
    }
    
    clearEditing() {
        this.clearData();
        this.sendData(true);
    }
    
    clearData(){
        this.setState({
            isEditing: !this.state.isEditing,
            skillName: "",
            level: "",
        });
    }

    sendData = (isEditing) =>{
        if (isEditing){
            this.props.workExperiences({
                isEditing: isEditing,
            });
          } else {
            this.props.workExperiences ( {
                isEditing: isEditing,
                skillName: this.skillName,
                level: this.level,
            });
          }
    }
    render(){
        var levelsArr = ["Beginner", "Intermediate", "Advanced"];
        return(
        this.state.isEditing 
        ? <div>
          <Grid container="container" spacing={3}>
            <Grid item="item" xs={12} sm={6}>
              <TextField required="required" id="skillName" name="skillName" label="Skill" fullWidth="fullWidth" value={this.state.skillName} onChange={this.handleInputChange}/>
            </Grid>
            
            <Grid item="item" xs={12} sm={6}>
              <TextField id="level" name="level" label="Level" fullWidth="fullWidth" placeholder={levelsArr[0]} value={this.state.level} onChange={this.handleInputChange}/>
            </Grid>
          </Grid>
          
        </div>
        :
        <div></div>);
    }
}

export default Skill;