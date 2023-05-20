import { createContext, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [userLoginEmail,setUserLoginEmail]=useState("");
    const  [userLoginPwd, setUserLoginPwd]=useState("");
    // const [isLoggedIn,setIsLoggedIn]=useState(false);
    
    const location = useLocation();
    const navigate = useNavigate();

    const getUSerLoginToken=async ()=>{
        const creds={
            email: userLoginEmail,
            password:userLoginPwd
        }
        try{
            const response= await fetch('/api/auth/login',{
            method:"POST",
            body:JSON.stringify(creds)
         }
         )
         const {encodedToken}= await response.json();
           console.log(encodedToken)
         localStorage.setItem("encodedUserLoginToken",encodedToken);
        }catch(e){
            console.log(e);
        }
       

    }

    
    const loginHandler=()=>{
    getUSerLoginToken();
    navigate(location?.state?.from);
    }
    return (
        <AuthContext.Provider value={{loginHandler,userLoginEmail,setUserLoginEmail,userLoginPwd,setUserLoginPwd}}>
            {children}
        </AuthContext.Provider>
    )
}