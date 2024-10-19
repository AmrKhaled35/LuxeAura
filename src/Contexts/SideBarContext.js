import React, { createContext, useState } from 'react';

const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
const [IsOpen, setIsOpen] = useState(false);
    const handelClose = ()=>{
        setIsOpen(false)
    }
return (
    <SideBarContext.Provider value={{ IsOpen, setIsOpen  ,handelClose}}>
    {children}
    </SideBarContext.Provider>
    );
};

export { SideBarContext, SideBarProvider };  
