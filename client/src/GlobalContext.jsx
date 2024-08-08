import { createContext, useEffect, useState } from "react";
import ProductApi from "./api/ProductApi";
import userApi from "./api/userApi";
import axios from "axios";
axios.defaults.withCredentials = true;
export const GlobalState = createContext();

export const DataProvider = ({children})=>{
    const [token , setToken] = useState(false);
    
    const refreshToken = async() =>{
      const res =  await axios.get("http://localhost:5000/user/refresh_token",{ withCredentials: true })
      setToken(res.data.accesstoken)
      
    }

    useEffect(()=>{
      const firstLogin = localStorage.getItem("firstLogin")
      if (firstLogin) refreshToken()
    },[])

    const state = {
        token:[token , setToken],
        productApi: ProductApi(),
        userApi:    userApi(token)
    }

    console.log("global state",state)

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
};