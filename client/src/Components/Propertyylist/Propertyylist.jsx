import React from 'react'
import './Propertyylist.css';
import { Link } from 'react-router-dom';
import villa from '../Propertyylist/Imag/villa.jpg';
import Apartemant from '../Propertyylist/Imag/Apartemant.jpg';
import  Chalet from '../Propertyylist/Imag/Chalet.jpg'
import Complex from '../Propertyylist/Imag/Complex.jpg' 
import Hotelss from '../Propertyylist/Imag/Hotelss.jpg';
import useFetch from '../../hooks/useFetch';



function Propertyylist() {
    const {data,loading,error} = useFetch
    ("/hotels/countByType");
    const images =[
        villa="https://images.pexels.com/photos/5855210/pexels-photo-5855210.jpeg",
        Apartemant="https://images.pexels.com/photos/5855210/pexels-photo-5855210.jpeg",
        Chalet="https://images.pexels.com/photos/5855210/pexels-photo-5855210.jpeg",
        Complex="https://images.pexels.com/photos/5855210/pexels-photo-5855210.jpeg",
        Hotelss="https://images.pexels.com/photos/5855210/pexels-photo-5855210.jpeg",
    ]
  return (
    <div className='plist'>
    {loading ? ("loading") :( <>
     {/* <div className='plistItem'>
     <Link className='' to='/hotels/:id/1635/care'>
    

     <img src={Apartemant} alt='' className='plistImag' />
      </Link>
     <div className='plistTitles'>
         <h1>Apartemant</h1>
         <h2>3516 apartemant</h2>

     </div>
    
    
    </div>
    <div className='plistItem'>
     <Link className='' to=''>
     <img src={Chalet} alt='' className='plistImag' />
     </Link>
     <div className='plistTitles'>
         <h1>Chalet</h1>
         <h2>319 hotels</h2>

     </div>
    
    
    </div>
    <div className='plistItem'>
     <Link className='' to=''>
     <img src={Complex} alt='' className='plistImag' />
     </Link>
     <div className='plistTitles'>
         <h1>Complex</h1>
         <h2>125 Complex</h2>

     </div>
    
    
    </div>
    <div className='plistItem'>
    <Link className='' to=''>
     <img src={villa} alt='' className='plistImag' />
     </Link>
     <div className='plistTitles'>
         <h1>Villa</h1>
         <h2>2306 Villa</h2>

     </div> 
    
    
     </div>  */}
   {data && 
   images.map((img,i)=>(

   
    <div className='plistItem' key={i}>
    <Link className='' to=''>
     <img src={img} alt='' className='plistImag' />
     </Link>
     <div className='plistTitles'>
         <h1>
             {data[i]?.type}  faute  faute
         </h1>
         <h2>{data[i]?.count} {data[i]?.type} faute  faute</h2>

     </div>
    
    
    </div> 
       ))}
    </> ) }

 </div>

  )
}

export default Propertyylist