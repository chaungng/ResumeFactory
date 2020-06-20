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
    }
})