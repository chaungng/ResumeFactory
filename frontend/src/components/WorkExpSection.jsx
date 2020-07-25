import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import WorkExperience from './WorkExperience';

class WorkExpSection extends Component {
    workExperiencesArr = [];
    workExperiencesIndex = []

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            workExperiences: this.workExperiencesArr,
            workExperiencesIndex: this.workExperiencesIndex
        };

        this.handleAddExperience = this.handleAddExperience.bind(this);
    }

    handleAddExperience() {
        let index = 0
        if (this.workExperiencesIndex.length > 0) {
            index = this.workExperiencesIndex[this.workExperiencesIndex.length - 1] + 1
        }
        this.workExperiencesIndex.push(index)
        this.workExperiencesArr.push(null)
        console.log(this.workExperiencesIndex)
        console.log(this.workExperiencesArr)
        this.setState({
            isClicked: !this.state.isClicked,
            workExperiences: this.workExperiencesArr
        });
    }

    getWorkExperience = (childData, canceled, index) => {
        if(canceled) {
            console.log(index)
            this.workExperiencesIndex.splice(index,1)
            this.workExperiencesArr.splice(index,1)
            this.forceUpdate()

            console.log(this.workExperiencesIndex)
            console.log(this.workExperiencesArr)
            return
        }

        console.log('bla')
        console.log(childData)
        if (!childData.isEditing) {
            this.workExperiencesArr[index] = childData;
            console.log(this.workExperiencesArr);
        } else {
            return;//flag to indicate it is being edited
        }
        this.setState({
            workExperiences: this.workExperiencesArr,
        });
        // console.log(this.state);
        this.sendData();
    }

    sendData = () => {
        this.props.workExperiences({
            workExperiences: this.state.workExperiences,
        });
    }

    render() {
        return (
            <div className='workExperience' style={{
                "border": "2px solid gray",
                "borderRadius": "10px",
                "padding": "20px",
                "margin": "auto"
            }}>
                <Typography variant="h6" gutterBottom>
                    Work experience
                </Typography>
                <Button variant="outlined" color="primary" size="small" startIcon={<AddIcon/>}
                        onClick={this.handleAddExperience}>
                    Add Experience
                </Button>
                {
                    this.state.workExperiencesIndex.map((ex, i) => {
                        return (
                            <WorkExperience
                                key={i}
                                workExperiences={this.getWorkExperience}
                                index={i}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default WorkExpSection;
