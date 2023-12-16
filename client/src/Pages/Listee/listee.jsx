import React, { useState } from 'react';
import './listee.css'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import SearchItem from '../../Components/SearchItem/SearchItem';
import useFetch from '../../hooks/useFetch';
import {useLocation} from 'react-router-dom';

function Listee() {
  const Location = useLocation();
  // const [destination, setDestination] = useState(Location.state.destination);
  // const [dates,SetDates] = useState(Location.state.dates);
  // const [openDate,setOpenDate] = useState(false);
  // const [options,SetOptions] = useState(Location.state.options);
     const [min, setMin] = useState (undefined);
     const [max, setMax] = useState (undefined);
    
     
   const {data, loading, error,reFetch} = useFetch(
    "/hotels?city= ${destination}&min=${min || 0}&max=${max || 999}");
    
   const handleClick= ()=>{
    reFetch()

   };
  return (
   
    <div className='List'>
     <Navbar/>
     <Hero type="List"/>
     <div className='ListContainer'>
      <div className='ListWrapper'>
        <div className='ListSearch'>
          <h1 className='LsTitle'>Search</h1>

          <div className='lsItem'>
            <label htmlFor='' className='lsTitel'>Destination</label>
            <input type='text'></input>
          </div>

          <div className='lsItem'>
            <label htmlFor='' className='lsTitel'>Check-in Date</label>
            <input type='date'></input>
          </div>

          <div className='lsItem'>
            <label htmlFor='' className='lsTitel'>Check-out</label>
            <input type='date'></input>
          </div>
          <div className='lsItem'>
            <label>Option</label>

            <div className='lsOption'>
            <div className='lsOptionItem'>
               <span className='lsOptionText'>
              Min price <small>per night</small>
               </span>
              <input  type="number" className='lsOptionInput' onChange={e=>setMin(e.target.value)}></input>
            </div>
            <div className='lsOptionItem'>
               <span className='lsOptionText'>
              Max price <small>per night</small>
               </span>
              <input  type="number" className='lsOptionInput' onChange={e=>setMax(e.target.value)}></input>
            </div>
            <div className='lsOptionItem'>
               <span className='lsOptionText'>
              Adult 
               </span>
              <input  type="number" min={1} className='lsOptionInput'placeholder=''></input>
            </div>
            <div className='lsOptionItem'>
               <span className='lsOptionText'>
              Childern 
               </span>
              <input  type="number" min={0} className='lsOptionInput' placeholder=''></input>
            </div>
            <div className='lsOptionItem'>
               <span className='lsOptionText'>
              Room
               </span>
              <input  type="number" min={1} className='lsOptionInput' placeholder=''></input>
            </div>
            </div>
           
          </div>
         
         <button onClick={handleClick}>Serch</button>
          
          
        </div>
        <div className='ListResult'>
          {loading ? "loading " :<>
          {data.map(item=>(
            <SearchItem item={item}  key={item.id} />
          ))}
          
          <SearchItem id="" />
          <SearchItem id=""/>
          <SearchItem id=""/>
          <SearchItem id=""/>
          <SearchItem  id=""/>
         
         </>}
        </div>

      </div>
     </div>

    </div>
  )
}

export default Listee