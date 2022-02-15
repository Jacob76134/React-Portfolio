import React, { useState, useContext, createContext } from "react";

export const BodyContext = createContext();

export const useBody = () => useContext(BodyContext);

export const BodyProvider = ({children}) => {
    const [currentBody, setCurrentBody] = useState ({
        body: 'AboutMe'
    });
    
    const updateBody = (bodyName) => {
        setCurrentBody({
            body: bodyName
        })
    }

    return (
        <BodyContext.Provider value ={{currentBody, updateBody}}>
        {children}
        </BodyContext.Provider>
    );
};
