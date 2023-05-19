import { Outlet } from "react-router"
import { Navbar } from "../components/navbar/Navbar"

export const Root=()=>{
    return(
        <>
         <Navbar/>
         <Outlet/>
        </>
    )
}