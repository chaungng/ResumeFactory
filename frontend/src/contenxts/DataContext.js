import * as React from "react";

export const DataContext = React.createContext({
    user: {
        loggedIn: false,
        setLoggedIn: null, 
        userId: null,
        setUserId: null,
        username: null,
        setUsername: null,
        numOfResume: null, 
        setNumOfResume: null,
        title: null,
        setTitle: null, 
        location: null,
        setLocation: null, 
        firstName: null, 
        setFirstName: null,
        lastName: null, 
        setLastName: null,
    },
    resumeCRUD: {
        currentResumeId: -1,
        setCurrentResumeId: null
    }
})