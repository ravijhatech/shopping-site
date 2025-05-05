import axios from "axios";

    async function  checkoutHandler(amount) {
        const {data:keyData}=await axios.get("/api/v1/getkey");
        const{key}=keyData
        console.log(keyData);
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
export default checkoutHandler;
