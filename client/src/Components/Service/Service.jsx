import React from 'react'
import './Service.css'
 import Bakhta from '../Service/Pictures/Bakhta.jpg'



function Service() {
  return (
    <section>
    <div className='backg'>
     <img  src={Bakhta} alt=''/>
    

    </div>

    <div className='content'>
     <div className='title'>
        <h1>Welcom to Bekhta Travel</h1> 
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus natus praesentium cumque?Voluptatum voluptas veniam cupiditate
     
        </p>
     </div>
     <div className='search'>
         <div className='container'>
             <label htmlFor=''>
                 {/* Where you want to go */}
             </label>
             <input type='text' placeholder='Depart'></input>

         </div>
         <div className='container'>
             <label htmlFor=''>
                 {/* Where you want to go */}
             </label>
             <input type='text' placeholder='Destination'></input>

         </div>
         <div className='container'>
             <label htmlFor=''>
                 {/* Check-in */}
             </label>
             <input type='date' ></input>

         </div>
         <div className='container'>
             <label htmlFor=''>
                 {/* Check-out */}
             </label>
             <input type='date' ></input>

         </div>
         <div className='containerm'>
             <label htmlFor=''>
                 {/* Check-out */}
             </label>
             <input type='number' ></input>

         </div>
         <button className='Rm-btn'>Explore Now</button>

     </div>
    </div>
 </section>
   

  )
}

export default Service