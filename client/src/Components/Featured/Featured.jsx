import React from 'react'
import './Featured.css';
import Dubia from '../Featured/Images/Dubia.jpg';
import Korea from '../Featured/Images/Korea.jpg';
import Turcke from '../Featured/Images/Turcke.jpg';
import useFetch from '../../hooks/useFetch';

function Featured() {
    const {data,loading,error} = useFetch("/hotels/countByCity?cities=Dubia,korea,turcke")
   
  return (
    <div className='featured'>
       {loading ? ("loading please waite"
       ):( 
        <>
        <div className='featuredItem'>
          <img src={Dubia} alt='' className='featuredImg' />
          <div className='featuredTitles'>
            <h1>Dubia</h1>
            <h2 className='propreties'>{data[0]} propreties</h2>
          </div>

        </div>

        <div className='featuredItem'>
          <img src={Korea} alt='' className='featuredImg' />
          <div className='featuredTitles'>
            <h1>Korea</h1>
            <h2 className='propreties' >{data[1]}123 propreties</h2>
          </div>

        </div>

        <div className='featuredItem'>
          <img src={Turcke} alt='' className='featuredImg' />
          <div className='featuredTitles'>
            <h1>Turcke</h1>
            <h2 className='propreties'>{data[2]} propreties</h2>
          </div>

        </div>   
         </>
         )}
    </div>
  )
}

export default Featured