import React, { useContext } from 'react'
import'./Sidebar.css'
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { FaCcPaypal } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { ImStatsDots } from "react-icons/im";
import { MdNotificationsActive } from "react-icons/md";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { IoSettings } from "react-icons/io5";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { BiSolidLogOut } from "react-icons/bi";

import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = ({}) => {
    const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='SidebarCente'>

       <div className='top'>
        <Link to= "/" style={{textDecoration:"none"}}>
       <span className='logo'> Yassadmin</span >
        </Link>
        <hr/>

       
    
       </div>
       <div className='center'>
        <ul>
            <p className='titele'>Main</p>
            <li>< MdDashboard className='icon'/>
            <span>Dashboard </span>
            </li>

            <p className='titele'>LISTS</p>
            <Link to= "/users" style={{textDecoration:"none"}}>
              <li><FaUser className='icon'/>
             <span>Users</span>
             </li>
            </Link>
             {/* <p className='titele'>Main</p> */}
             <Link to= "/hotels" style={{textDecoration:"none"}}>
       
       
               <li><GiShop className='icon'/>
               <span>Hotels</span>
               </li>
                </Link>
                <Link to= "/rooms" style={{textDecoration:"none"}}>
                <li><FaCcPaypal className='icon'/>
                <span>Rooms</span>
                </li>
                </Link>
                <Link to= "/Payment" style={{textDecoration:"none"}}>
                 <li>< FaCcPaypal className='icon'/>
                <span>Payment</span>
                </li>
                </Link>
                <li><TbTruckDelivery className='icon'/>
                <span>Delivery</span>
                </li>
                
               
                <p className='titele'>USEFUL</p>
                <li>< ImStatsDots className='icon'/>
                <span>Stats</span>
                </li>
                <li><MdNotificationsActive className='icon'/>
                <span>Notifications</span>
                </li>
                <p className='titele'>SERVIC</p>
                <li><MdOutlineSettingsSystemDaydream className='icon'/>
                <span>System Health</span>
                </li>
                <li><LiaBlogSolid className='icon'/>
                <span>Logs</span>
                </li>
                <li><IoSettings className='icon'/>
                <span>settings</span>
                </li>
                <p className='titele'>USER</p>
                <li><GiPlagueDoctorProfile className='icon'/>
                <span>Profile</span>
                </li>
                <li>< BiSolidLogOut className='icon'/>
                <span>Logout</span>
                </li>
        </ul>
        
       </div>
       <div className='bottom'>
        <div className='colorOptions' onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className='colorOptions' onClick={()=>dispatch({type:"DARK"})}></div>
        
       </div>
    </div>
  )
}

export default Sidebar