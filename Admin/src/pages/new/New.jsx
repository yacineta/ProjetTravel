import React, { useState } from 'react'
import "./New.css"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import { FaFolderOpen } from "react-icons/fa6";
import axios from 'axios';

function New({inputs,title}) {
  const [file, setFile] = useState("")
  const [info,setInfo] = useState({})
  const handelChange = e =>{
    setInfo(prev=>({ ...prev,[e.target.id]:e.target.value }))
    

  };

  const handleClick = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset","upload");
    try{
      const uploadRes = await axios.post(
        "                     ",
      data
      );
      const {url} = uploadRes.data;

      const newUser = {
        ...info,
        img: url,
      };

      await axios.post("/auth/register",newUser);

    }catch (err){
      console.log(err);
     

    }
  }
  console.log(file)
  return (
    <div className='New'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="NewTop">
          <h1>{title}</h1>
        </div>
        <div className="NewBottom">
          <div className="LeftNew">
            <img src={
              file 
               ? URL.createObjectURL(file)
               : "https://icon-icons.com/icons2/1129/PNG/512/photocameraoutline_80020.png"
              }
             alt=""
             className="imgNew" />
          </div>
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
             { inputs.map((input)=> (

            
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input 
                onChange={handelChange} 
                type={input.type} 
                placeholder={input.placeholder}
                id={input.id}
                />
              </div>
              ))}

              {/* <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="John Doe"/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="John_dor@gmail.com"/>
              </div>

              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+213 00126955"/>
              </div>

              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Elto st 3516"/>
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder=""/>
              </div> */}


               <button onClick={handleClick} className='buttonSend'>Send</button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default New