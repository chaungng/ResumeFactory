import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Skill from './Skill';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from "@material-ui/icons/Edit";
import ResumeController from '../controllers/ResumeController';
import {DataContext} from "../contexts/DataContext";
import localForage from "localforage";
import { Alert } from '@material-ui/lab';

class SkillsSection extends Component {
    arr = [];

    constructor(props) {
        super(props);

        if (this.props.defaultInfo) {
            let defaultInfo = this.props.defaultInfo
            this.state = {
                isEditing: true,
                skills: defaultInfo,
            };
        } else {
            this.state = {
                isEditing: true,
                skills: this.arr,
            };
        }

        this.save = this.save.bind(this)
        this.edit = this.edit.bind(this)
        this.getData = this.getData.bind(this)
        this.handleAddSkill = this.handleAddSkill.bind(this);
    }

    handleAddSkill() {
        this.arr.push(null)
        this.setState({
            skills: this.arr,
        });
    }

    getSkill = (childData, action, index) => {
        switch (action) {
            case -1:
                this.arr[index] = -1
                break
            case 1:
                this.arr[index] = childData
                break
            default:
                break
        }
        this.setState({
            skills: this.arr,
        });
    }

    sendData = () => {
        let data = this.getData()
        // console.log('arr', this.arr)
        // console.log('data', data)
        this.props.set(data)
    }

    getData = () => {
        let data = this.arr.filter((v) => {
            return (v !== -1 && v !== null)
        })
        // console.log('data', data)
        return data
    }

    save = () => {
        if(this.getData().length === 0) return

        this.setState({
            isEditing: false
        }, this.sendData)
    }

    edit = () => {
        this.setState({
            isEditing: true
        })
    }

    async loadDefaultInfo(){
        let userId = await localForage.getItem('userId');
        if (userId != null && userId != undefined && userId != ""){
            let result = await ResumeController.getSkill(userId);
            return result;
        }
    }

    async componentDidMount (){
        if (!this.props.isView){
            await this.onClickLoadInfo();
        }
    }

    async onClickLoadInfo(){
        let result = await this.loadDefaultInfo();
        if (result !== undefined && result.success){
            let defaultInfo = result.data;
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
        let style =
            this.state.isEditing ? {
                "border": "2px solid gray",
                "borderRadius": "10px",
                "padding": "20px",
                "margin": "auto"
            } : null
        return (
            <div className='skills' style={style}>
                <Typography variant="h6" gutterBottom>
                    Skills
                </Typography>
               

                {
                    this.state.isEditing
                        ?
                        <>
                            {
                                this.getData().length !== 0
                                    ?
                                    <Button variant="outlined" color="primary" size="small" startIcon={<SaveIcon />}
                                        style={{"margin": "2px",}} onClick={this.save}>
                                        Save Skills
                                    </Button>
                                    :
                                    null
                            }
                            <Button variant="outlined" color="primary" size="small" startIcon={<AddIcon/>}
                                    style={{"margin": "2px",}} onClick={this.handleAddSkill}>
                                Add Skill
                            </Button>
                        </>
                        :
                        <Button variant="outlined" color="primary" size="small" startIcon={<EditIcon/>}
                        style={{"margin": "2px",}} onClick={this.edit}>
                            Edit
                        </Button>
                }
                 {this.state.error ? 
                    <Alert severity="error">Something wrong! Could not load data!</Alert>
                    : ""}

                {
                    this.state.skills.map((v, i) => {
                        if(v === -1) {
                            return null
                        }

                        return (
                            <Skill
                                isEditing={this.state.isEditing}
                                key={i}
                                set={this.getSkill}
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

export default SkillsSection;
