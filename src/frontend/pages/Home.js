import { useEffect } from "react";

export const Home =()=>{
    const getData=async()=>{
        const response= await fetch("/api/products");
        console.log(await response?.json())
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <>
        
        <h1>Hello from Home
        
        </h1>
        </>
    )
}