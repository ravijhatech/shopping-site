
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import "./card.css"
import axios from 'axios'
import { Row } from 'react-bootstrap';
import { isLoggedIn } from './Utils/Check_logedIn_user';
import emptyCard from '../assets/emptyCard.json';
import Lottie from 'lottie-react';


function CartItemscreen({ cart}) {
    
const navigate = useNavigate();

    useEffect(() => {
        const check = async () => {
          const loggedIn = await isLoggedIn();
          if (!loggedIn) {
            navigate('/');
          } 
        };
        check();
      }, [navigate]);
    
      async function  checkoutHandler(amount) {
        const {data:keyData}=await axios.get("/api/v1/getkey");
        const{key}=keyData
        console.log(key);
        
        const {data:orderData} = await axios.post("/api/v1/payment/process",{amount})
        
    console.log(orderData);
    const options ={
        key,
        amount:amount*100,
        receipt: "receipt#123",
        payment_capture: 1,
        name:'Shopping Mart',
        
        description:'Ravi pratihast by integrate using razopay payment gateway',
        order_id:orderData.id,
        callback_url:"/api/v1/paymentVerification",
        prefill:{
            name:'Ravi kumar',
            email:'ravipratihast69@gmail.com',
            contact:'7667000989'
        },
        theme:{
            color:'#F37254'
        }
    };
    const rzp=new Razorpay(options);
    rzp.open();
    
    }
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'40px'}}> 
        {cart.length === 0 ?  <div style={{ width: '500px', height: '500px',}}>
      <Lottie animationData={emptyCard} loop={true} autoplay={true} />
      <p style={{ justifyContent:'center',alignItems:'center',display:'flex',fontSize:'40px',color:'red',fontWeight:'bold'}}> <u>Empty Card</u></p>
    </div>
        :
        
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            padding: '20px'
        }}>
            {
                cart.map((item, index) => (
                    <div key={index} style={{
                        marginTop:'20px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        width: '220px',
                        padding: '16px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        textAlign: 'center'
                    }}>
                    <img src={item.url} style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }}/>
                    <h4 style={{ fontSize: '16px', height: '40px', overflow: 'hidden' }}>{item.title}</h4>
                    <p className='text-xl font-semibold mb-2'>₹ {item.price}</p>
                    <div style={{display:'flex',justifyContent:'space-between'}} >
                  
                   <button onClick={()=>checkoutHandler(item.price)}  style={{backgroundColor:'green',color:'white',width:'80px' ,height:'30px',borderRadius:'5px'}}><p style={{fontSize:'10px',textAlign:'center',color:'white'}}>Buy Now</p></button>
                   <button onClick={()=>addtocart(item)} style={{backgroundColor:'red',color:'white',height:'30px',width:'80px',borderRadius:'5px'}}><p style={{fontSize:'10px',textAlign:'center',color:'white'}}>Remove</p></button>
                  
                  </div>
                 
                    
                </div>
                )
                )
            }


        </div>
}
        </div>
    )
}

export default CartItemscreen
