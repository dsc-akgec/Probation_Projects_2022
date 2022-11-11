import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import axios from 'axios';
import './Api.css';
export default function FetchApi({cat}) {
    const[Data,setData]=useState([]);
    const FetchData=async()=>{
        await axios.get 
        ( cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=049b8b4ba84149fabefcbc0c5bfd80bd`

          :`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=049b8b4ba84149fabefcbc0c5bfd80bd`)
        .then((res) =>setData(res.data.articles));
    };
    useEffect(()=>{
        FetchData();
    },[cat]);
  return (
    <div className='container'>
        <div className='container-2'>
            {Data 
              ? Data.map((items,index)=>(
                <>
                <div className='main-con'>
                    <h5 >{items.title}</h5>
                    <img src={items.urlToImage} alt="error" style={{width:"auto",height:"200px",objectFit:"cover"}} />
                 <p><b>{items.description}</b></p>
                 <p className='Content'>{items.content}</p>
                 <a className='more' href={items.url} target="blank">Read More..</a>
                </div>
                </>
              ))
            :"Loading"}
        </div>
    </div>
  );
};
