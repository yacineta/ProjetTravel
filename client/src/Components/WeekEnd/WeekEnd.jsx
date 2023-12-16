import React from 'react'
import './WeekEnd.css'
import Salame from '../WeekEnd/WeekImg/Salame.jpg'
import { Link } from 'react-router-dom'

function WeekEnd() {
  return (
    <div className=''>
        
    <h1 className='WekTitel'>Week-end à Dubia</h1>

<div className='wekpragraph'>
     
    <h4>
    À la croisée entre Orient et Occident, la capitale d Emariate dévoile ses innombrables richesses culturelles 
    et artistiques. Découvrez le temps d un week-end à Dubia , une ville qui bouillonne perpétuellement
    </h4>
   
</div>
    <h1 className='wekOffres'>
    Top offres Vol + Hôtel Dubia
    </h1>
<div className='WeekEnd'>

<div className='wekItem'>
   
    <img src={Salame} alt='' className='wekimag' />
    
    
    <span className='wekName'>Aparthotel Stare Miasto</span>
    <span className='wkCity'>Dubia</span>
    <span className='wkPrice'>Starting From $896</span>
    <div className='wkRating'>
        <Link to='/hotels' className=''>
        <button className='wkbtnr'>8.9</button>
        </Link>
    
    <span>Exellent</span>
    </div>
</div>
<div className='wekItem'>
    <img src={Salame} alt='' className='wekimag' />
    <span className='wekName'>Aparthotel Stare Miasto</span>
    <span className='wkCity'>Dubia</span>
    <span className='wkPrice'>Starting From $896</span>
    <div className='wkRating'>
        <Link to='/hotels'>
             <button className='wkbtnr'>8.9</button>
        </Link>
   
    <span>Exellent</span>
    </div>
</div>
<div className='wekItem'>
    <img src={Salame} alt='' className='wekimag' />
    <span className='wekName'>Aparthotel Stare Miasto</span>
    <span className='wkCity'>Dubia</span>
    <span className='wkPrice'>Starting From $896</span>
    <div className='wkRating'>
    <Link to='/hotels'>
             <button className='wkbtnr'>8.9</button>
    </Link>
   
    <span>Exellent</span>
    </div>
</div>
</div>
<div className='WeekEnd'>
<div className='wekItem'>
    <img src={Salame} alt='' className='wekimag' />
    <span className='wekName'>Aparthotel Stare Miasto</span>
    <span className='wkCity'>Dubia</span>
    <span className='wkPrice'>Starting From $896</span>
    <div className='wkRating'>
    <Link to='/hotels'>
            <button className='wkbtnr'>8.9</button>
    </Link>
    
    <span>Exellent</span>
    </div>
</div> 
 <div className='wekItem'>
    <img src={Salame} alt='' className='wekimag' />
    <span className='wekName'>Aparthotel Stare Miasto</span>
    <span className='wkCity'>Dubia</span>
    <span className='wkPrice'>Starting From $896</span>
    <div className='wkRating'>
    <Link to='/hotels'>
            <button className='wkbtnr'>8.9</button>
    </Link>
    
    <span>Exellent</span>
    </div>
</div>
<div className='wekItem'>
    <img src={Salame} alt='' className='wekimag' />
    <span className='wekName'>Aparthotel Stare Miasto</span>
    <span className='wkCity'>Dubia</span>
    <span className='wkPrice'>Starting From $896</span>
    <div className='wkRating'>
    <Link to='/hotels'>
             <button className='wkbtnr'>8.9</button>
    </Link>
   
    <span>Exellent</span>
    </div>
</div>
 </div>
</div>
  )
}

export default WeekEnd