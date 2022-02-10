import React,{ useState } from "react";



export const DataContext= React.createContext();

export const DataProvider=({children})=>{
    const [theamColor, setTheamColor]=useState('dark')
    return (
        <DataContext.Provider value={{ theamColor, setTheamColor }}>
            {children}
        </DataContext.Provider>
    )
}