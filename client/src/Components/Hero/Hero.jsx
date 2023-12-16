import React, { useContext } from 'react'
import './Hero.css';
import {MdOutlineTravelExplore} from "react-icons/md"
import {BiSolidHotel} from "react-icons/bi"
import {FaTaxi} from "react-icons/fa"
import {SiNintendogamecube} from "react-icons/si"
import {MdOutlineFlight} from "react-icons/md"
import { Link } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';

function Hero() {
    const{dispatch} =useContext(SearchContext)

  return (
    
    <div className='headerHero'>
    <div className='heroContainer'>
         <div className='heroList'>
        <div className='heroListeItem active'>
            
            <Link className='stayed ' to='/' >
                <MdOutlineTravelExplore/>
                <span>Stay</span>
            </Link>
            
        </div>
        <div className='heroListeItem active'>
        <Link className='stayed ' to='/hotels' >
         <BiSolidHotel/>
         <span>Hotels</span>
        </Link>
          

            
        </div>
        <div className='heroListeItem active'>
            <Link className='stayed ' to='/hotels/:id/1635/care'>
             <FaTaxi />
            <span>Car rentals</span>
            </Link>
          
            
        </div>
        <div className='heroListeItem active'>
            <Link className='stayed ' to='/hotels/:id/1635/Attraction'>
                <SiNintendogamecube/>
                <span>Attractions</span>
            
            </Link>
           
            
        </div>
        <div className='heroListeItem active'>
            <Link className='stayed ' to='/hotels/:id/1635/Flight'>
             <MdOutlineFlight/>
             <span>Flights</span>
            </Link>
          
            
        </div>
    </div>

    </div>
   
</div>
  )
}

export default Hero