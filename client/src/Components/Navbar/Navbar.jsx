import React, { useContext } from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';


function Navbar() {
    const {user } = useContext(AuthContext)
  return (
    <div className='Navbar'>
         <div className='navContainer'>
            <Link className='' to="/" style={{color:"inherit",textDecoration:"none"}}>
            <span className='Logo'>Bakhta Travel</span>
            </Link>
            {user ? user.username :  (<div>
              <Link className='' to="/hotels" >
               <button className='navButton'>Register</button>
              </Link>
              <Link className='' to="/hotels/:id/1635">
               <button className='navButton'>Sign    </button>
              </Link>
                

              
                 
            </div>)}

           
        </div>
    </div>
  )
}

export default Navbar