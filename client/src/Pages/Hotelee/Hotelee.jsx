import React, { useContext } from 'react'
import './Hotelee.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import {MdLocationOn} from "react-icons/md"
import { ImExit} from "react-icons/im"
import { BsArrowRightCircleFill,BsArrowLeftCircleFill} from "react-icons/bs"
import Reserve from '../../Components/Reserve/Reserve'

import photo1 from "../Hotelee/Photos/photo1.jpg"
import photo2 from "../Hotelee/Photos/photo2.jpg"
import photo3 from "../Hotelee/Photos/photo3.jpg"
import photo4 from "../Hotelee/Photos/photo4.jpg"
import photo5 from "../Hotelee/Photos/photo5.jpg"
import photo6 from "../Hotelee/Photos/photo6.jpg"
import Mailist from "../../Components/MailList/MailList"
import Footer from "../../Components/Footer/Footer"
import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../Context/SearchContext'
import { AuthContext } from '../../Context/AuthContext'

function Hotelee() {

  const location = useLocation();
   const id =location.pathname.split("/")[2] ;
  console.log(location)
 
  const [sliderNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false);
  const [opeModal,setOpenModal] = useState(false);
                                      //  faute            
  const {data, loading, error } = useFetch(`/hotels/find/ ${id} `);
  const {dates,options} = useContext(SearchContext);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate()
  
  console.log(dates);

  const MILLSECONDS_PER_DAY = 1000 * 60 *60 * 24;
  function dayDifferenc (date1,date2) {
    const timeDiff = Math.abs(date2.getitme() - date1.getitme());
    const diffDays = Math.ceil(timeDiff / MILLSECONDS_PER_DAY);
    return diffDays;
  }
  // 
  //  const days = dayDifferenc (dates[0].endDate, dates[0].startDate);

  const photos =[
    {
      id:1,
      servic:photo1,
    },
    {
      id:2,
      servic:photo2,
    },
    {
      id:3,
      servic:photo3,
    },
    {
      id:4,
      servic:photo4,
    },
    {
      id:5,
      servic:photo5,
    },
    {
      id:6,
      servic:photo6,
    },
   

  ];


   const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);


   };
   const handleMove =(direction) =>{
     let newSlideNumber;
     if(direction==="l"){
      newSlideNumber = sliderNumber === 0 ? 5: sliderNumber-1
     }else{
      newSlideNumber = sliderNumber === 5 ? 0: sliderNumber+1
     }
     setSlideNumber(newSlideNumber)
   }
  const handleClick= () =>{
    if(user){
      setOpenModal(true)

    }else{
    navigate("/")

  }
  }
  return (
   
    <div className='hotel'>
      <Navbar/>
      <Hero type="List" />
      {loading ? ("loading") :
      (  
      <div className='hotelContainer'>
       {open && <div className='slider'>
        < ImExit  className='close' onClick={()=>setOpen(false)} />
        <BsArrowLeftCircleFill className='arrow' onClick={()=>handleMove("r")} />
        
        <div className='sliderWrapper'>
          .src
          <img src={data.photos[sliderNumber]?.servic.src}
           alt='' 
           className='sliderImg' />
        </div>
        <BsArrowRightCircleFill className='arrow' onClick={()=>handleMove("r")}/>
       </div>
       } 
        <div className='hotelWrapper'>
          <button className='bookNow'>
            Reserve Now
          </button>
          <h1 className='hotelTitle'> {data.name}Grand Hotel</h1>
          <div className='hotelAddress'>
            
               < MdLocationOn  className='hotelIcon'/>
           
           
            <span> {data.address}Elton St 125 New york</span>

          </div>
          <span className="hotelDistance">
            Exellent Location - {data.distance}500m from center
          </span>
          <span className='hotelPriceHighLight'>
            {data.cheapsetPrice}
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {
                // data.
              photos?.map((photo, i)=>(
              <div className='hotelImgWrapper'>
                <img onClick={()=>handleOpen(i)}

                src={photo.servic} 
                alt='' 
                className='hotelImg' />
              </div>

            ))}

          </div>
          <div className='hotelDetails'>

            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>{data.titel}Stay in the heart of Krakow</h1>
              <p className='hotelPrag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit,
                 voluptatum minima ut, doloribus maiores facere consequuntur aspernatur
                  quibusdam culpa dolorum asperiores dolores mollitia quos alias corporis
                   sit. Laudantium, magni?
              </p>
            </div>

            <div className='hotelDetailsPrice'>
              <h1 className='DetailsTit'>Perfect for a 9-night stay!</h1>
              <span>
                located in the real heart of Kralow this property has
                an excellent location score of 9.8!
              </span>
              <h2><b>$945</b> 9 nights </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
         

        </div>
       
            <Mailist/>
            <Footer/>
      </div> )}
          
          {opeModal && <Reserve setOpen={setOpenModal} hotelId={id}/> }
    </div>
  )
}

export default Hotelee