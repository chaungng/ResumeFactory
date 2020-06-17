import * as React from "react";

export const DataContext = React.createContext({
    user: {
        loggedIn: false,
        setLoggedIn: null
    }
})