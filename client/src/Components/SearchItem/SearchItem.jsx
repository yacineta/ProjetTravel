import React from 'react'
import './SearchItem.css';
import Room from '../SearchItem/Item/Room.jpg';
import {Link} from 'react-router-dom';

function SearchItem({item}) {
    const photos =[
        {
            id:1,
            src:Room,
        }
    ]

  return (
    <div className='SearchItem' >
                Room
                 {/* {.photos[0]} */}
        <img src={item } alt='' className='SeImg' />
        <div className='SeDesc'>
                                         .name
            <h1 className='SeTitle'> {item  }Tower Street Apartments</h1>
                                              .distace
            <span className='SaDistance'>{item }500m from center</span>
            <span className='SaTaxiOp'>Free airopt taxi</span>
            <span className='SaSubtitle'>
                Studio Apartment with Air conditioning
            </span>
            <span className='SaSaFeatures'>
                    .desc
                {item }
                Entire Studio * 1 bathroom * 21m 1 full bed
            </span>
            <span className='SaCancelOp'>Free cancllation</span>
            <span className='SaCancelOpSubtitle'>
                you can cancel later , so loock in the great price to day
            </span>
            
        </div>
        <div className='SaDetails'>
                 .rating
            {item &&  
            <div className='SaRating'>
                <span>Excellent</span>
                <button>
                         .rating
                    {item  }
                    8.9</button>
            </div>}
            <div className='SaDetailTexts'>
                                                .cheapestPrice
                <span className='SaPrice'>${item  }123</span>
                <span className='SaTaxOp'>Includes taxes and fees </span>
                <Link className='' to='/hoteles/:id/Hotelee'> 
                <button className='SaCheckButton'>See availability</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default SearchItem