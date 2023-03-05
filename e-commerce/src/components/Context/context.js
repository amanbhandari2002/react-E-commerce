import { createContext, useContext, useState} from "react";

const Context=createContext();
export const StateContext=({children})=>{
    const [subCat,setsubCat]=useState([])

    return <Context.Provider value={{subCat,setsubCat}}>{children}</Context.Provider >
}

export const useStateContext=()=>useContext(StateContext)
