import Lottie from 'lottie-react';
import React from 'react'
import { useLocation } from 'react-router-dom'
import animationData from '../assets/check.json'
import './confirmPayment.css';


function ConfirmPayment() {
  const query=new URLSearchParams(useLocation().search);
  const reference = query.get("reference");
  return (
    <div className='container'>
      <div className='card-container '>
    <div  className="card">
       <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
    {reference && (
     <div style={{marginBottom:'30px'}}>
      <span> <strong>Payment Sucessfull</strong></span>
      <br/>
      <span className='card-title'>Payment ID :{reference}</span>
     </div>
    
   
  )}
    </div>
</div>
    </div>
  )
}

export default ConfirmPayment
