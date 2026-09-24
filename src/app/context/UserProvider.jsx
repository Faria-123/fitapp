"use client"
import { createContext, useState } from "react";

// import React from 'react';
export let userContext = createContext({});
const UserProvider = ({ children }) => {
    const [Plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const shared = {
        Plan, setPlan, saved, setSaved
    }

    return (
        <userContext.Provider value={shared}>{children}</userContext.Provider>
    );
};

export default UserProvider;
