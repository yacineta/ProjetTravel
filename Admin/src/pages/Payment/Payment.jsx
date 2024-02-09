import React from 'react'
import './Payment.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import StraipeContainer from '../../Components/Straipe/StraipeContainer'


function Payment() {
 
  return (
    <div className='Payment'>
      
       <Sidebar/>
       <div className='NewPayment'>
        <Navbar/>
        <div>
          <h1>Make a payment</h1>
          <StraipeContainer/>
        </div>
        
        
       </div>
    
    </div>
  )
}

export default Payment