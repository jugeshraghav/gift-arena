import { createContext, useEffect } from "react";

export const DataContext=createContext();

export const DataProvider=({children})=>{
    const getData=async()=>{
        const response= await fetch("/api/products");
        console.log(response.json())
    }
    useEffect(()=>{
        getData()
    },[])
    return <DataContext.Provider>
        {children}
    </DataContext.Provider>
}