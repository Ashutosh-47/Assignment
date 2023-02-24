import React from 'react'
import "./Header.css"
import { Outlet , Link} from "react-router-dom"
 
export default function Header() {
  return (
 
     <div className='main'>

      
     <div className='search'>
<input type = 'text' className='searcharear' />
     </div>
     
     <div className='fields'>
 <span className='fil'> </span> 
      <span className='fil'>Overview</span>
      <span className='fil'>DashBoard </span>
      <span className='fil'>Analytics</span>
     </div>

    
    </div>


 
  )
}
