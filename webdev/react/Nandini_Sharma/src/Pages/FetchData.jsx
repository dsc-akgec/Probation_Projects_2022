import React from 'react';
import axios from "axios";
import  {useEffect } from 'react';
import { useState } from 'react';
import './pages.css';


const FetchData = ({ cat }) => {
    const [Data, setData] = useState("");
    const [FirstData, setFirstData] = useState("");
    
    const fetchData = async() =>{
        
        await axios
        .get(
            cat ?'https://newsapi.org/v2/top-headlines?country=in&category='+cat.toString()+'&apiKey=0d53838fe14a407f869dfed9f0e2ba3c'
           : 'https://newsapi.org/v2/top-headlines?country=in&apiKey=0d53838fe14a407f869dfed9f0e2ba3c').then((res) => {setData(res.data.articles);
    

           setFirstData(res.data.articles[0])
        })

        };
        console.log(FirstData);
        
    useEffect(() => {
      fetchData();
      
      
    }, [cat]);
    

      
  return (
    <div className='f-data'><h3>TOP HEADLINES</h3>
    <div className='boxFirst'>
        <div id='imgFirst'><img src={FirstData.urlToImage} className='imgFirst'></img></div>
            <div id='BoxRight'><h2>{FirstData.title}</h2>
            <p>{FirstData.content}</p>
            <div className='linkbox'> <a href={FirstData.url} target="_blank" className='link' ><u>View More</u></a></div></div>
            </div>
    
    
    <div id='ManyNews' style={{minHeight:"100vh"}}>


        
        {Data ?Data.map
        ((items,index)=>
        <><center>
        <div className='box' style={index===0?{display:"none"}:{}}>
            <h2  >{items.title}</h2>
            <img src={items.urlToImage} className='img'></img>
            <p>{items.content}</p>
            <div className='linkbox'> <a href={items.url} target="_blank" className='link' ><u>View More</u></a></div>
            </div>
            </center>
            </>
            ):"loading..."}</div>
    
    </div>
    

  )
}

export default FetchData;