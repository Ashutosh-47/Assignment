import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './Component/Header';
import Graph from './Component/Graph';
import Footer from './Component/Footer';
import ModalDialog from './Component/ModalDialog'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


 

function App() {
  
  const [ data1 , setD ] = useState({});
  const [confirm , setC ] = useState(0);
  const [DeathT , setDT ] = useState(0);
  const [RecoverT , setRT ] = useState(0);
  const [ active , setAC ] = useState(0);
  const [ arr, setA ] = useState([]);

  useEffect(  () => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '95d4d77e9cmsh352fecb4b71d9c3p1e5c07jsnf7388e182be8',
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
      }
    };
    
    fetch('https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-04-07', options)
      .then(response => response.json())
      .then(data => {

        
        console.log(data)
         setC(data.data.confirmed);
         setDT(data.data.deaths);
         setRT(data.data.recovered);
         setAC(data.data.active)
        // console.log(data.data.confirmed,data.data.deaths,data.data.recovered,data.data.active)
         setA([confirm, DeathT,RecoverT , active]);
        // console.log(data)
        // console.log( confirm, DeathT,RecoverT , active)
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div div className='app'>
    
    <Header/>
  
    <Graph arr = {arr} />

    <div className="container mt-3">
      <ModalDialog />
    </div>

    <Footer/>

    </div>
  ) 
}

export default App;

