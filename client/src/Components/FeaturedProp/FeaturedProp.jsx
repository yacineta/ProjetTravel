import React from 'react'
import './FeaturedProp.css'
import Dubia1 from '../FeaturedProp/Sora/Dubia1.jpg'
import useFetch from '../../hooks/useFetch'

function FeaturedProp() {
    const {data, loading, error,reFetch} = 
    useFetch("/hotels?Featured=true&limit=4");
  return (
    <div className='FeaturedProp'>
        {loading ? ("loading") :(<>

       

       
        <div className='fpItem'>
             <img src={Dubia1} alt='' className='fpImag' />
            <span className='fpName'>Aparthotel Stare Miasto</span>
            <span className='FpCity'>Dubia</span>
            <span className='FpPrice'>Starting From $896</span>
            <div className='fpRating'>
            <button>8.9</button>
            <span>Exellent</span>
        </div>
            
        </div> 
       
       


        <div className='fpItem'>
             <img src={Dubia1} alt='' className='fpImag' />
            <span className='fpName'>Aparthotel Stare Miasto</span>
            <span className='FpCity'>Dubia</span>
            <span className='FpPrice'>Starting From $896</span>
            <div className='fpRating'>
            <button>8.9</button>
            <span>Exellent</span>
        </div>

        </div>
        <div className='fpItem'>
             <img src={Dubia1} alt='' className='fpImag' />
            <span className='fpName'>Aparthotel Stare Miasto</span>
            <span className='FpCity'>Dubia</span>
            <span className='FpPrice'>Starting From $896</span>
            <div className='fpRating'>
            <button>8.9</button>
            <span>Exellent</span>
        </div>

        </div>
        <div className='fpItem'>
             <img src={Dubia1} alt='' className='fpImag' />
            <span className='fpName'>Aparthotel Stare Miasto</span>
            <span className='FpCity'>Dubia</span>
            <span className='FpPrice'>Starting From $896</span>
            <div className='fpRating'>
            <button>8.9</button>
            <span>Exellent</span>
        </div>

        </div>
        </>
        )}
    </div>
  )
}

export default FeaturedProp