import React from 'react'
import "./Folder.css";

import Hero from '../../Components/Hero/Hero';
import Signe from '../../Components/Signe/Signe';
import Vicent from '../Folder/FolderImag/vicent.jpg'
import MailList from '../../Components/MailList/MailList';



function Folder( ) {
   

  return (
    <div className='Folder'>
        <Hero/>
        <div className='ImageFolder'>
        <img  src={Vicent} alt='' className='VicentFolder'/>

           
        </div>
        <div className='ContentFolder'>
          <Signe  /> 
         
            
        </div>
          <div className='folderMai'>
           <MailList />
          </div>
              
            
          
           
           
        
        
       
        
        
    </div>
  )
}

export default Folder