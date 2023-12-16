import React from 'react'
import './Flight.css'
import Pixel from './FlightImg/pixel.jpg'
import Hero from '../../Components/Hero/Hero'
import { Link } from 'react-router-dom';
import {ImArrowLeft} from "react-icons/im"
import WeekEnd from '../../Components/WeekEnd/WeekEnd';

function Flight() {
  return (
    <section className=''>
     
         <Hero />

      <div className='backg'>
      
     
        <img  src={Pixel} alt='' className='pixelImg'/>

          </div>
        
      
       <div className='content'>
        
       <Link className='linkedc ' to='/hotels/:id/1635/care'>
        <ImArrowLeft/>
      </Link>

       
      
      
       <div className='search'>
        <div className='container'>
             <label htmlFor=''>
                 {/* Where you want to go */}
             </label>
             <input type='text' placeholder='Depart'></input>
        </div>
        <div className='container'>
             <label htmlFor=''>
                 {/* Where you want to go */}
             </label>
             <input type='text' placeholder=' Destination'></input>
        </div>

        <div className='container'>
             <label htmlFor=''>
                 {/* Check-in */}
             </label>
             <input type='date' ></input>

        </div>
        <div className='container'>
             <label htmlFor=''>
                 {/* Check-out */}
             </label>
             <input type='date' ></input>

        </div>
        <div className='containerm'>
             <label htmlFor=''>
                 {/* Check-out */}
             </label>
             <input type='number' ></input>

        </div>
         <button className='Rm-btn'>Explore Now</button>
        </div>
       
       
       
      </div>
     
      <WeekEnd />
    </section>
  )
}

export default Flight