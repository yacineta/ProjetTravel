import React, { useState } from 'react'
import "./NewHotel.css"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import { FaFolderOpen } from "react-icons/fa6";
import useFetch from '../../hooks/useFetch';
// import {hotelInputs} from "../../formSource"
import axios from 'axios';

function NewHotel({inputs}) {
  const [files, setFiles] = useState("")
  const [info,setInfo] = useState({})
  const [rooms, setRooms] = useState([])
  // error
  const {data, loading, } = useFetch("/rooms");
  const handelChange = e =>{
    setInfo(prev=>({ ...prev,[e.target.id]:e.target.value }));
     

  };
  console.log(rooms)
  const handeleSelect = e =>{
  const value = Array.from(e.target.SelecteOptions,( option) =>option.value);
    setRooms(value);
  };
  console.log(files)

  const handleClick = async e =>{
    e.preventDefault()
    try{
        const list = await Promise.all(
            Object.values (files).map(async(file)=>{
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset","upload");
            const uploadRes = await axios.post(
                "                     ",
              data
              );
              const {url} = uploadRes.data;
              return url;
        
        })
        );

        const newhotel = {
            ...info,
            rooms,
            photos: list,
        };

        await axios.post("/hotels",newhotel)

    }catch(err){
        alert('error')
    }
  }

  console.log(files)
  return (
    <div className='New'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="NewTop">
          <h1>Add new Product</h1>
        </div>
        <div className="NewBottom">
          {/* <div className="LeftNew">
            <img src={
              files 
               ? URL.createObjectURL(files[0])
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
                <input type="file"  
                id='file'
                multiple
                onChange={e=>setFiles(e.target.files)}
                 style={{display:"none"}}/>
              </div>
             { inputs.map((input)=> (

            
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input  id={input.id} onChange={handelChange} type={input.type} placeholder={input.placeholder}/>
              </div>
              ))}
                   
                   <div className="formInput" >
                <label>Featurd</label>
                <select  id='featured' onChange={handelChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>
              </div>

              <div className="SelectRooms" >
                <label>Rooms</label>
                <select  id='rooms' multiple onChange={handeleSelect} >
                    {loading ? "loading" : data && data.map(room=>(
                      <option  key={room._id} value={room._id}>{room.title}</option>
                      

                    ))}
                    
                </select>
              </div>



               <button className='buttonSend' onClick={handleClick}>Send</button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHotel