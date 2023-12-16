import React, { useContext, useState } from 'react'
import "./Reserve.css"
import { FaCircle, FaFontAwesome } from 'react-icons/fa'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../Context/SearchContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Reserve({setOpen, hotelId}) {
    const {data,loading, error} = useFetch("hotels/room/${hotelId}")
    const [selectedRooms,setSelectedRooms] = useState ([])
    const {dates} = useContext(SearchContext)
    

    const getDatesInRange = (startDate,endDate) =>{
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime());
        while(data <= end){

            let dates = [];

            dates.push(new Date(date))
            date.setDate(date.getDate()+1)

        }
        return dates;
        
    };
       const  alldates =  getDatesInRange  
    //    (dates[0].startDate,dates[0].endDate)

     const isAvailble = (roomNumber) =>{
        const isFound = roomNumber.unavailedates.some(dates =>
            alldates.includes(new Date(  ).getTime())
                                    //date
            );
            return !isFound
     };

    const handleSelect = (e) =>{
        const checked = e.target.checked
        const value = e.target.value
         selectedRooms( 
            checked
            ? [...selectedRooms, value] 
            : selectedRooms.filter((item ) => item !== value)
            );

             
    };

    const navigate = useNavigate



    const handleClick = async() =>{
        try{
            await Promise.all (
                selectedRooms.map((roomId)=>{
                const res = axios.put(`/rooms/availability/${roomId}`,{
                    dates:alldates,
                });
                return res.data;
            })
            );
            setOpen(false)
            navigate("/")
        }catch(err){

        }

    };
    
  return (
    <div className='Reserve'>
        <div className='rContainer'>
            <FaFontAwesome icon={FaCircle} className='rClose' onClick={() => setOpen(false)}/>.
            <span>Select your rooms:</span>
            {data.map(item=>(
                <div className=''>
                    <div className='rItemInfo'>
                        <div className='rTitle'>yassine{item.title}</div>
                        <div className='rDesc'>{item.Desc}</div>
                        <div className='rMax'>Max People:<b>{item.maxPeople} </b></div>
                        <div className='rPrice'>{item.price} </div>


                    </div>
                    
                        {item.roomNumbers.map(roomNumber=>(
                            <div className='room'>
                            <label>{roomNumber.number}</label>
                            <input 
                            type='checkbox' 
                            value={roomNumber._id} 
                            onChange={handleSelect}
                            disabled={!isAvailble(roomNumber)}
                            />
                       
                    </div>
                     ))}
                </div>
               ))} 
               <button onClick={handleClick} className='rButton'>Reserver New!</button>
        </div>
    </div>
  )
}

export default Reserve