import React from 'react'
import'./Widget.css'
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { MdCalendarMonth } from "react-icons/md";
import { TbAlignBoxBottomLeftFilled } from "react-icons/tb"
// 
const Widget = ({type}) => {
    let data;

    const amount = 100 
    const diff = 20

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<IoMdPerson  className='icon2'
                 style={{color:"crimson",
                backgroundColor: "rgba(255, 0 ,0 ,0.2)",
                 }}
                 
                 />,
                
            };
            break;
            case "order":
            data={
                title: "ORDERS",
                isMoney:false,
                link:"View all orders",
                icon:<HiMiniShoppingCart  className='icon2' style={{color:"golodenrod",
                backgroundColor: "rgba(218, 165 ,32 ,0.2)",}}
                />,
                
            };
            break;
            case "earning":
            data={
                title:" EARNING",
                isMoney:true,
                link:"View net earning",
                icon:<MdCalendarMonth className='icon2'
                style={{color:"green",
                backgroundColor: "rgba(0, 128 ,0 ,0.2)",
                 }}/>
                
            };
            break;
            case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See details",
                icon:<TbAlignBoxBottomLeftFilled  className='icon2'
                style={{color:"purple",
                backgroundColor: "rgba(128, 0 ,128,0.2)",
                 }}/>,
                
            };
            break;
            default:
                break;
    }
  return (
    <div className='Widget'>
        <div className='left'>
       
            <span className='title'>{data.title} </span>
            <span className='counterT'>{data.isMoney && "$"}{amount}</span>
            <span className='link'>{data.link}</span>

        </div>
        <div className='right'>
            <div className='percentage positive'>
                
             < MdKeyboardArrowUp/>
                {diff }
                %
            </div>
            {data.icon}
            

        </div>
    </div>
  )
}

export default Widget