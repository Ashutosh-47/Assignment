import React from 'react'
import "./Sidebar.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Sidebar({arr}) {
   console.log(arr)
  return (
    
    <div className='sidemain'>
      <div className='rep'>Corona-Cases-Report</div>
      <div className='all'>All Cases <span className='det'>Details</span></div>
      <div className='Tdata'>14,26,096</div>
      <div className='Tdeath'>
        <div className='TDW'>Total Deaths
        <div>
          81,865 
        </div>
        </div>
      </div>
      
      <div className='Trecove'>
      <div className='TRW'>Total Recovered
      <div>3,00,054</div>
      </div>
      </div>


      <div className='Tactive'>
      <div className='TAW'>Total Active
      <div>10,44,177</div>
      </div>
      </div>

      <div className='bar'>
    
<CircularProgressbar className='barA' value={66} text={`${66}%`}
  styles={   buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,
    className:'barBBB',
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',

    // Text size
    textSize: '26px',

    

    

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.9,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(0, 128, 0, ${66 / 100})`,
    textColor: '#171725',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  }) } 
/> 
<div className='barAd'>
Recovered 3,00,054
</div>

<div className='barBBB'>
<CircularProgressbar
className='barB'
  value={21}
  text={`${21}%`} 
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.105,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',
    
    // Text size
    textSize: '26px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.9,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(0, 0, 255, ${31 / 100})`,
    textColor: '#171725',
    trailColor: '#DBDFF1',
    backgroundColor: '#3e98c7',
  })}
/>
</div>
<div className='barBB'>
Deaths 81,865
</div>

      </div>
      
    </div>
  )
}
