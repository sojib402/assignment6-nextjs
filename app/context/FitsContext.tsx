'use client'
import React,{ ReactNode, createContext, useState } from 'react';
export const FitsContext=createContext({});

const FitsProvider = ({children}:{children:ReactNode}) => {
    const [addPlans,setAddPlans]=useState([]);
    const [addSave,setAddSave]=useState([])

    const sharedData={
        addPlans,
        setAddPlans,
        addSave,
        setAddSave
    }
    return (
       <FitsContext.Provider value={sharedData}>{children}</FitsContext.Provider>
    );
};

export default FitsProvider;