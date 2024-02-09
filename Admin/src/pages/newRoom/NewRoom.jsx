import React, { useState } from 'react'
import "./NewRoom.css"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import { FaFolderOpen } from "react-icons/fa6";
//  import { userInputs } from '../../formSource';
import useFetch from '../../hooks/useFetch';
//  import { Input } from '@mui/material';
import axios from 'axios';

function NewRoom(roominputs) {
  const [file, setFile] = useState("");
  const [info,setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const [HotelId, setHotelId] = useState(undefined);
        // error
  const {data, loading,  } = useFetch("/hotels");
  const handelChange = e =>{
    setInfo(prev=>({ ...prev,[e.target.id]:e.target.value }));
     

  };
  const handelClick = async(e) =>{
    e.preventDefault()
    const roomNumbers = rooms.split(",").map(room=>({number:room}));
    try{
        await axios.post(`/rooms/${HotelId}`,{...info,roomNumbers})

    }catch(err){console.log(err)}
  }
  console.log(file)
  return (
    <div className='New'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="NewTop">
          <h1>Add New Room</h1>
        </div>
        <div className="NewBottom">
          {/* <div className="LeftNew">
            <img src={
              file 
               ? URL.createObjectURL(file)
               : "https://icon-icons.com/icons2/1129/PNG/512/photocameraoutline_80020.png"
              }
             alt=""
             className="imgNew" />
          </div> */}
          <div className="rightNew">
            <form className='formNew'>
            <div className="formInput">
                <label htmlFor='file'>
                  <FaFolderOpen className='iconFa'/>
                </label>
                <input type="file"  id='file'
                onChange={e=>setFile(e.target.files[0])}
                 style={{display:"none"}}/>
              </div>
             { roominputs.map((input)=> (

            
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input 
                id={input.id} 
                type={input.type} 
                placeholder={input.placeholder}
                onChange={handelChange}
                />
              </div>
              ))}
              <div className='formInput'>
                <label>Rooms</label>
                <textarea onChange={e=>setRooms(e.target.value)} placeholder='give comma between room numbers'/>

              </div>
              <div className='FormInput'>
                <label>Choose a hotel</label>
                <select id ="hotelId" onChange={e=>setHotelId(e.target.value)}>
                    {loading ?"loading" : data && 
                    data.map(hotel=>(
                    <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                )

                )}</select>
              </div>



               <button className='buttonSend' onClick={handelClick}>Send</button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewRoom;