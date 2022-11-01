import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
export const BusinessNewsContext = createContext()

export const BusinessNewsContextProvider = (props) => {
    const [businessdata,setData]= useState()
    

    useEffect(()=>{
        axios.get(
            'https://newsapi.org/v2/everything?q=tesla&from=2022-10-01&sortBy=publishedAt&apiKey=7519dfcfb96141c48b97c8f63822801e'
        )
        .then((response) => setData(response.businessdata))
        .catch((error)=>console.log(error));
    },[])


  return (
    <BusinessNewsContext.Provider value={{businessdata}}>
        {props.children}
    </BusinessNewsContext.Provider>

  );
};