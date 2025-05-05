import React, { useEffect, useState } from 'react'
import "./card.css"
import axios from 'axios'
import { Row } from 'react-bootstrap';
import HeaderCard from './HeaderCard';
import { useNavigate } from 'react-router-dom';
import CategoryCard from './CategoryCard1';
import ImageSlider from './ImageSlider';
import AutoSlider from './ImageSlider';
import CategoryCard1 from './CategoryCard1';
import CategoryCard2 from './CategoryCard2';
import CategoryCard3 from './CategoryCard3';
import CategoryCard4 from './CategoryCard4';
function Card({ product,cart ,setCart }) {
    const [cardShow ,setCartShow] = useState([]);

useEffect(()=>{
    axios.get("/api/v1/fetchCard")
    .then(res=>setCartShow(res.data))
    .catch(err=>console.error('Api',err));
},[]);


    const addtocart =(item)=>{
        setCart([...cart,item]);
    }

    

    const navigate = useNavigate();
    const PassDataNextScreen =()=>{
        navigate('/productDetail',{state:{product}})
    }
    
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
        <div >
            
           <HeaderCard/>
           <br/>
            <AutoSlider />
             <br/>
            <CategoryCard1/>
            <CategoryCard2/>
            <CategoryCard3/>
            <CategoryCard4/> 

             {/* <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                padding: '20px'
            }}>
            
            {
                cardShow.map((item, index) => (
                    <div key={index} style={{
                        marginTop:'20px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        width: '220px',
                        padding: '16px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        textAlign: 'center'
                    }}>
                    <img
                            src={item.url}
                            alt={"product.title"}
                            style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }}
                        />
                     <h4 style={{ fontSize: '16px', height: '40px', overflow: 'hidden' }}>{item.title}</h4>
                    <p className='text-xl font-semibold mb-2'>₹ {700}</p>
                    

                  <div style={{display:'flex',justifyContent:'space-between'}} >
                  
                   <button onClick={()=>checkoutHandler(item.price)}  style={{backgroundColor:'green',color:'white',width:'80px' ,height:'30px',borderRadius:'5px'}}><p style={{fontSize:'10px',textAlign:'center',color:'white'}}>Buy Now</p></button>
                   <button onClick={()=>addtocart(item)} style={{backgroundColor:'red',color:'white',height:'30px',width:'80px',borderRadius:'5px'}}><p style={{fontSize:'10px',textAlign:'center',color:'white'}}>Add Card</p></button>
                  
                  </div>
                 
                    
                </div> */}
                {/* )
                )
            } */}

        {/* </div>  */}
        </div>
       
       
    )
}

export default Card
