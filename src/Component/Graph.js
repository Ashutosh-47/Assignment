import "./Graph.css"
import Sidebar from './Sidebar'
import axios from "axios";
import React, { useEffect, useState } from 'react'
import DottedMap from 'dotted-map';
//import MyComponent from "./MyComponent";
//import Mycomp from "./Mycomp";
import MyComponent from "./MyComponent";




export default function Graph( {arr}) {

  const [ dat , setD ] = useState([])

  useEffect(  () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '95d4d77e9cmsh352fecb4b71d9c3p1e5c07jsnf7388e182be8',
        'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
      }
    };
    
   fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Chicago', options)
      .then(response => response.json())
      .then(data => {
        console.log("data " , data.data.covid19Stats )
        setD(data.data.covid19Stats)
        
       
      })
      .catch(err => console.error(err));

      
  }, [])


  //console.log("find " , dat)

  return (
    <div className='graphmain'>
        <Sidebar arr={arr} />
        <div className='gmain'>
  
<MyComponent dat={dat}/>

        </div>
    </div>
  )
}
