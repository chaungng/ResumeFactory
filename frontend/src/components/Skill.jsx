import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CloseIcon from "@material-ui/icons/Close";

class Skill extends React.Component {
    original

    constructor(props) {
        super(props);
        if (this.props.defaultInfo !== null) {
            let defaultInfo = this.props.defaultInfo
            this.state = {
                isEditing: true,
                skillName: defaultInfo.skillName,
                level: defaultInfo.level,
            };
        } else {
            this.state = {
                isEditing: true,
                skillName: "",
                level: "",
            };
        }

        this.original = this.state
        this.delete = this.delete.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        }, () => {
            this.sendData(1)
        });
    }

    delete() {
        this.sendData(-1)
    }

    sendData = (action) => {
        switch (action) {
            case -1:
                this.props.set(null, -1, this.props.index);
                break
            case 1:
                this.props.set({
                    skillName: this.state.skillName,
                    level: this.state.level,
                }, 1, this.props.index);
                this.original = this.state
                break
            default:
                this.props.set(null, 0, this.props.index);
                break
        }
    }

    render() {
        let levelsArr = ["Beginner", "Intermediate", "Advanced"];
        return (
            <div>
                <Grid container spacing={3}>
                    {
                        this.props.isEditing
                            ?
                            <>
                                <Grid item xs={12} sm={5}>
                                    <TextField required id="skillName" name="skillName" label="Skill"
                                               fullWidth value={this.state.skillName}
                                               onChange={this.handleInputChange}/>
                                </Grid>

                                <Grid item xs={12} sm={5}>
                                    <TextField id="level" name="level" label="Level" fullWidth
                                               placeholder={levelsArr[0]} value={this.state.level}
                                               onChange={this.handleInputChange}/>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <CloseIcon onClick={this.delete}/>
                                </Grid>
                            </>
                            :
                            <>
                                <Grid item xs={12} sm={5}>
                                    <p>Skill: {this.state.skillName}</p>
                                </Grid>

                                <Grid item xs={12} sm={5}>
                                    <p>Level: {this.state.level}</p>
                                </Grid>
                            </>
                    }
                </Grid>
            </div>
        )
    }
}

export default Skill;