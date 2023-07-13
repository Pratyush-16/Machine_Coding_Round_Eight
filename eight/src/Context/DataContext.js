import { createContext, useState } from "react";
import { meetups } from "../Data/Data";

export const  DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [data, setData] = useState(meetups);


    return(

        <DataContext.Provider value={{data}}>{children}</DataContext.Provider>
    )
}