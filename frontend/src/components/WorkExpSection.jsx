import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import WorkExperience from './WorkExperience';
import ResumeController from '../controllers/ResumeController';
import {DataContext} from "../contexts/DataContext";
import localForage from "localforage";

class WorkExpSection extends Component {
    arr = [];

    constructor(props) {
        super(props);
        if(this.props.defaultInfo !== undefined) {
            this.arr = this.props.defaultInfo
        }

        this.state = {
            workExperiences: this.arr,
        };

        this.handleAddExperience = this.handleAddExperience.bind(this);
    }

    handleAddExperience() {
        this.arr.push(null)
        this.setState({
            workExperiences: this.arr
        });
    }

    getWorkExperience = (childData, action, index) => {
        switch (action) {
            case -1:
                this.arr[index] = -1
                break
            case 1:
                this.arr[index] = childData
                console.log(index);
                break
            default:
                break
        }

        this.setState({
            workExperiences: this.arr,
        }, this.sendData)
    }

    sendData = () => {
        this.props.set(this.getData());
    }

    getData = () => {
        let data = this.arr.filter((v) => {
            return (v !== -1 && v !== null)
        })
        // console.log('data', data)
        return data
    }

    async loadDefaultInfo(){
        // let userId = this.context.user.userId;
        // if (userId == null || userId == undefined){
           let userId = await localForage.getItem('userId');
        // }
        if (userId != null && userId != undefined && userId != ""){
            let result = await ResumeController.getWorkExp(userId);
            return result;
        }
    }

    async componentDidMount (){
        await this.onClickLoadInfo();
    }

    async onClickLoadInfo(){
        let result = await this.loadDefaultInfo();
        if (result !== undefined && result.success){
            let defaultInfo = result.data;
            // this.arr.push(defaultInfo)
            for (const [index, value] of defaultInfo.entries()) {
                this.arr.push(value)
            }
            this.setState({
                workExperiences: this.arr,
                error: false,
            });
        } else {
            this.setState({
                error: true,
            });
        }
    }

    render() {
        return (
            <div className='workExperience' style={{
                "border": "2px solid gray",
                "borderRadius": "10px",
                "padding": "20px",
                "margin": "auto"
            }}>
                <div style={{"paddingBottom": "20px",}}>
                <Typography variant="h6" gutterBottom>
                    Work experience
                </Typography>
                <Button variant="outlined" color="primary" size="small" startIcon={<AddIcon/>}
                        onClick={this.handleAddExperience}>
                    Add Experience
                </Button>
                </div>
                {
                    this.state.workExperiences.map((v, i) => {
                        if(v === -1) {
                            return null
                        }

                        return (
                            <WorkExperience 
                                key={i}
                                set={this.getWorkExperience}
                                defaultInfo={v}
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
