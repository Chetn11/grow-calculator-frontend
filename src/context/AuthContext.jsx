import {  createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext=createContext();


function AuthContextProvider({children}){
    const navigate=useNavigate();
    const [state,setState]=useState({
        isAuth:false,
        token:null
    })
 
    let providerState={
        state,
        login:(token)=>{
            setState({
                ...state,
                isAuth:true,
                token:token
            })
        },
        logout:()=>{
            setState({
                ...state,
                isAuth:false,
                token:null
            });
            navigate("/login")
        }
    }
    

    return <AuthContext.Provider value={{providerState}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider