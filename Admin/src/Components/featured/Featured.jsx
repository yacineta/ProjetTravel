import React from 'react'
import './Featured.css'
import { GrMoreVertical } from "react-icons/gr";
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from "react-icons/md"


const Featured = () => {
  return (
    <div className='Featured'>
        <div className="topF">
          <h1 className="titelR">Total Revenu</h1>
          <GrMoreVertical fontSize="small"/>
        </div>
        <div className="bottomF">
          <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
          </div>
          <p className='titelF1'>Total sales mad today</p>
          <p className='amount'>$420</p>
          <p className='desc'>
            Previous transactions processing . last  pymants is not be inclouded
          </p>
          <div className="summary">
            <div className="itemy">
              <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                <MdOutlineKeyboardArrowDown fontSize={"small"}/>
                  <div className="resultAmount">$12.4K</div>
                </div>
              
            </div>

            <div className="itemy">
              <div className="itemTitle">Last Week</div>
                <div className="itemResult positive">
                < MdKeyboardArrowUp fontSize={"small"}/>
                  <div className="resultAmount">$12.4K</div>
                </div>
              
            </div>

            <div className="itemy">
              <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                < MdKeyboardArrowUp fontSize={"small"}/>
                  <div className="resultAmount">$12.4K</div>
                </div>
              
            </div>
            
            
          </div>
        </div>
    </div>
  )
}

export default Featured