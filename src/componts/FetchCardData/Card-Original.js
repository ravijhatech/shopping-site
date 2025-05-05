import React, { useEffect, useState } from 'react'
import "./card.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import HeaderCard from './HeaderCard';
import AutoSlider from './ImageSlider';


function CardCategory({ product, cart, setCart }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/fetchCard')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error('Error fetching products:', err);
            });
    }, []);

    const addtocart = (item) => {
        setCart([...cart, item]);
    }

    const navigate = useNavigate();
    const PassDataNextScreen = () => {
        navigate('/productDetail', { state: { product } })
    }

    async function checkoutHandler(amount) {
        const { data: keyData } = await axios.get("/api/v1/getkey");
        const { key } = keyData
        console.log(key);

        const { data: orderData } = await axios.post("/api/v1/payment/process", { amount })

        console.log(orderData);
        const options = {
            key,
            amount: amount * 100,
            receipt: "receipt#123",
            payment_capture: 1,
            name: 'Shopping Mart',

            description: 'Ravi pratihast by integrate using razopay payment gateway',
            order_id: orderData.id,
            callback_url: "/api/v1/paymentVerification",
            prefill: {
                name: 'Ravi kumar',
                email: 'ravipratihast69@gmail.com',
                contact: '7667000989'
            },
            theme: {
                color: '#F37254'
            }
        };
        const rzp = new Razorpay(options);
        rzp.open();

    }
    return (
        <>
            <HeaderCard />
            <br />
            <AutoSlider />
            <br />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                padding: '20px'
            }}>
                {products.map((product, index) => (
                    <div key={index} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        width: '220px',
                        padding: '16px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        textAlign: 'center'
                    }}>
                        <img
                            src={product.url}
                            alt={product.title}
                            style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }}
                        />
                        <h4 style={{ fontSize: '16px', height: '40px', overflow: 'hidden' }}>{product.title}</h4>
                        <p style={{ fontWeight: 'bold' }}>${product.price}</p>
                       
                            
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <button onClick={checkoutHandler}
                                style={{backgroundColor:'green',color:'white',width:'80px',borderRadius:'5px'}}
                                >Buy</button>
                                <button  onClick={addtocart}
                                style={{backgroundColor:'red',color:'white',width:'80px',borderRadius:'5px'}}
                                >Add Cart</button>
                            
                        </div>

                    </div>
                ))}

            </div>
        </>
    );
}

export default CardCategory


