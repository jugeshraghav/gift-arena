import { createContext, useContext} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    // const [isLoggedIn,setIsLoggedIn]=useState(false);
    const {userLoginEmail,userLoginPwd}= useContext(LoginContext);
    console.log(typeof(userLoginEmail))
    console.log(typeof(userLoginPwd))
    
    const location = useLocation();
    const navigate = useNavigate();

    const getUSerLoginToken=async ()=>{
        const creds={
            email: userLoginEmail,
            password:userLoginPwd
        }
        console.log(creds)
     const response= await fetch('/api/auth/login',{
        method:"POST",
        body:JSON.stringify(creds)
     }
     )
     const {encodedUserLoginToken}= await response.json();

     localStorage.setItem("encodedUserLoginToken",encodedUserLoginToken);
    }

    // const encodedToken=localStorage.getItem("encodedToken");
    // console.log(encodedToken)

    const loginHandler=()=>{
        // console.log("hello from login handler");
        // setIsLoggedIn(!isLoggedIn);
    getUSerLoginToken();
    navigate(location?.state?.from);
    console.log(location)
  
    }
    return (
        <AuthContext.Provider value={{loginHandler}}>
            {children}
        </AuthContext.Provider>
    )
}