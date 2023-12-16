import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Service from '../../Components/Service/Service'
import Featured from '../../Components/Featured/Featured'
import Propertyylist from '../../Components/Propertyylist/Propertyylist'
import FeaturedProp from '../../Components/FeaturedProp/FeaturedProp'
import MailList from '../../Components/MailList/MailList'
import Footer from '../../Components/Footer/Footer'



function Home() {
  return (
    <div className='Home'>
        <Navbar/>
        <Hero/>
        <div>
            <Service/>
        </div>
        <div className='homeContainer'>
            <Featured/>
            <h1 className='homeTitel'> Browse by property type</h1>
            <Propertyylist/>
            <h1 className='homeTitel'>Homes guests love</h1>
            <FeaturedProp/>
            <MailList/>
            <Footer/>

        </div>
        
    </div>
  )
}

export default Home