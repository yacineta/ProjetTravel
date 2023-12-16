import React from 'react'
import './Care.css'
// import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Care1 from './CareImag/Care1.jpg'
import Care2 from './CareImag/Care2.jpg'
import Care3 from './CareImag/Care3.jpg'
import {BiSolidPhoneCall} from "react-icons/bi"
import {ImStatsDots} from "react-icons/im"
import { BsFillChatSquareQuoteFill } from 'react-icons/bs'
import Footer from '../../Components/Footer/Footer'


function Care() {
  return (
    <div className=''>
        {/* <Navbar/> */}
        
           <Hero/>
       
       
      <div className='Care'>

        
        
        <div className='carItem'>
          <img src={Care1} alt='' className='careImg' />
          <div className='carTitles'>
            <h1>Luxe</h1>
            <h2 className='carPropreties'>Apartire de 645$</h2>
          </div>
        </div>
        <div className='carItem'>
          <img src={Care2} alt='' className='careImg' />
          <div className='carTitles'>
            <h1>Normal</h1>
            <h2 className='carPropreties'>Apartire de 213$</h2>
          </div>
        </div>
        <div className='carItem'>
          <img src={Care3} alt='' className='careImg' />
          <div className='carTitles'>
            <h1>Base</h1>
            <h2 className='carPropreties'>Apartire de 125$</h2>
          </div>
        </div>
       </div>
       
       <div className='Info'>

         <div className='carInfo'>
          <BiSolidPhoneCall className='iconMd'/>
            <div className='infoTitle'>
             <h3 className='infoh'>Nous sommes là pour vous aider  </h3>
             <span className='infoServic'>Service Clients disponible dans plus de </span>
             <h2 className='info30L'> 30 langues</h2>
            </div>
          </div>

          <div className='carInfo'>
            <BsFillChatSquareQuoteFill className='iconMd' />
            <div className='infoTitle'>
             <h3 className='infoh'>Annulation gratuite  </h3>
             <span className='infoServic'>Sur la plupart des réservations, jusqu'à </span>
             <h2 className='info30'>48 heures avant la prise en charge </h2>
            </div>
          </div>

          <div className='carInfo'>
            <ImStatsDots className='iconMd'/>
            <div className='infoTitle'>
             <h3 className='infoh'>Plus de 5 millions de commentaires  </h3>
             <span className='infoServic'>Laissés par de vrais clients </span>
             <h2 className='info30'> </h2>
            </div>
          </div>


      </div>
      <Footer/>
    </div>
  )
}

export default Care