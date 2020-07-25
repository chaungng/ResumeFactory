import React, {Component} from "react";
import localforage from "localforage";
import {DataContext} from "./DataContext";
import history from "../history";

export class DataProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                loggedIn: false,
                setLoggedIn: this.setLoggedIn,
                userId: null,
                setUserId: this.setUserId,
                username: null,
                setUsername: this.setUsername,
                numOfResume: null,
                setNumOfResume: this.setNumOfResume,
                title: null,
                setTitle: this.setTitle,
                location: null,
                setLocation: this.setLocation,
                firstName: null, 
                setFirstName: this.setFirstName,
                lastName: null, 
                setLastName: this.setLastName,
            },
            resumeCRUD: {
                currentResumeId: -1,
                setCurrentResumeId: this.setCurrentResumeId,
                resume: {
                    basicInfo: {
                        title: '',
                        level: '',
                        company: ''
                    },
                    personalInfo: {
                        firstName: '',
                        lastName: '',
                        phone: '',
                        email: '',
                        city: '',
                        state: '',
                        zip: '',
                        country: '',
                        summary: '',
                    },
                    workExperiences: {
                        workExperiences: null,
                    },
                    skills: null,
                    education: null
                },
                setResume: this.setResume
            }
        }
    }

    async componentDidMount() {
        let loggedIn = await localforage.getItem('loggedIn')
        let userId = await localforage.getItem('userId')
        let username = await localforage.getItem('username')
        let numOfResume = await localforage.getItem('numOfResume')
        let title = await localforage.getItem('title')
        let location = await localforage.getItem('location')
        let firstName = await localforage.getItem('firstName');
        let lastName = await localforage.getItem('lastName');
        let currentResumeId = await localforage.getItem('currentResumeId')


        // console.log('getting data from store', currentResumeId)

        this.setState(state => {
            state.user.loggedIn = loggedIn
            state.user.userId = userId
            state.user.username = username
            state.user.numOfResume = numOfResume
            state.user.title = title
            state.user.location = location
            state.user.firstName = firstName
            state.user.lastName = lastName
            return state
        })

    }

    setLoggedIn = async (val) => {
        this.setState((state) => {
            state.user.loggedIn = val
            return state
        })
        await localforage.setItem('loggedIn', val)
        history.push('/login')
    }

    setUserId = async (val) => {
        this.setState((state) => {
            state.user.userId = val
            return state
        })
        await localforage.setItem('userId', val)
    }

    setUsername = async (val) => {
        this.setState((state) => {
            state.user.username = val
            return state
        })
        await localforage.setItem('username', val)
    }

    setFirstName = async (val) => {
        this.setState((state) => {
            state.user.firstName = val
            return state
        })
        await localforage.setItem('firstName', val)
    }

    setLastName = async (val) => {
        this.setState((state) => {
            state.user.lastName = val
            return state
        })
        await localforage.setItem('lastName', val)
    }

    setNumOfResume = async (val) => {
        this.setState((state) => {
            state.user.numOfResume = val
            return state
        })
        await localforage.setItem('numOfResume', val)
    }

    setTitle = async (val) => {
        this.setState((state) => {
            state.user.title = val
            return state
        })
        await localforage.setItem('title', val)
    }

    setLocation = async (val) => {
        this.setState((state) => {
            state.user.location = val
            return state
        })
        await localforage.setItem('location', val)
    }

    setCurrentResumeId = async (val) => {
        this.setState((state) => {
            state.resumeCRUD.currentResumeId = val
            return state
        })
        console.log('save currentResumeId', val)
        await localforage.setItem('currentResumeId', val)
    }

    setResume = {
        setBasicInfo: (val) => {
            this.setState((state) => {
                state.resumeCRUD.resume.basicInfo = val
                return state
            })
        },
        setPersonalInfo: (val) => {
            this.setState((state) => {
                state.resumeCRUD.resume.personalInfo = val
                return state
            })
        },
        setWorkExperiences: (val) => {
            this.setState((state) => {
                state.resumeCRUD.resume.workExperiences = val
                return state
            })
        },
        setSkills: (val) => {
            this.setState((state) => {
                state.resumeCRUD.resume.skills = val
                return state
            })
        },
        setEducation: (val) => {
            this.setState((state) => {
                state.resumeCRUD.data.education = val
                return state
            })
        }
    }

    render() {
        return (
            <DataContext.Provider value={this.state}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}