import { createContext, useState } from "react";

export const LoginContext=createContext();

export const LoginProvider=({children})=>{
    const [userLoginEmail,setUserLoginEmail]=useState("");
    const  [userLoginPwd, setUserLoginPwd]=useState("");

    return(
        <LoginContext.Provider value={{userLoginEmail,setUserLoginEmail,userLoginPwd,setUserLoginPwd}}>
            {children}
        </LoginContext.Provider>
    )
}