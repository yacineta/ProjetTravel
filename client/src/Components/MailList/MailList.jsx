import React from 'react'
import './MailList.css';

function MailList() {
  return (
    <div className='MailList'>
    <h1 className='mail'>Save time, save mony !</h1>
    <span className='mailTitle'>Sign up and we ll send the best deals to you</span>
    <div className='mailInputContainer'>
     <input type='text' placeholder='your Email'></input>
     <button>Subscribe</button>
    </div>

 </div>
  )
}

export default MailList