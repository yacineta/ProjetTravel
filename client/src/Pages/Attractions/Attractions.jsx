import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import SearchItem from '../../Components/SearchItem/SearchItem'
import Reserve from '../../Components/Reserve/Reserve'


function Attractions() {
  return (
    <div className='Attractions'>
        <Navbar/>
        <Hero/>
       <Reserve />
      
       

       
        <h1>Hello  Attractions</h1>
    </div>
  )
}

export default Attractions