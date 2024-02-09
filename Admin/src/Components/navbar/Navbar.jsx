import React, { useContext } from 'react'
import './Navbar.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { BiFullscreen } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
    const {darkMode} = useContext(DarkModeContext);
  return (
    <div className='Navbar'>
        <div className='wrapperN'>
            <div className='search'>
                <input type="text" placeholder='Search...'/>
                <IoSearchSharp/>
            </div>
            <div className='items'>
                <div className='item'>
                    < IoLanguage className='icon1'/>
                    
                </div>
                <div className='item'>
                    <MdDarkMode className='icon1' onClick={()=>dispatchEvent({type:"TOGGLE"})}/>
                   
                </div>
                <div className='item'>
                    <BiFullscreen className='icon1'/>
                   
                </div>
                <div className='item'>
                    <MdNotificationsActive className='icon1'/>
                    <div className='counter'>1</div>
                </div>
                <div className='item'>
                    <IoChatbubbleEllipsesSharp className='icon1'/>
                    <div className='counter'>2</div>
                   
                </div>
                <div className='item'>
                    <FaClipboardList className='icon1'/>
                   
                </div>
                <div className='item'>
                    <img
                    src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=''
                    className='avatar'
                    />
                   
                </div>
            </div>

        </div>

    </div>
  )
}

export default Navbar