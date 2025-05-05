import React, { useState } from 'react'
import { productData } from './data'
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom'
import ConfirmPayment from './componts/ConfirmPayment'
import CardItem from './componts/Card'
import ProductDetails from './componts/ProductDetails'
import HeaderCard from './componts/HeaderCard'
import UserContext from './componts/Countcontext'
import CartItem from './componts/CartItem'
import CartItemscreen from './componts/CartItem'
import Login from './componts/Auth/Login'
import Register from './componts/Auth/Register'
import ForgotPassword from './componts/Auth/ForgotPassword'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DashBoard from './Admin_Dashboard/DashBoard'
import CreateCard from './Admin_Dashboard/CreateCard'


function App() {
  const [cart, setCart] = useState([]);

  const countproductdata = cart.length;
  return (
    

    <UserContext.Provider value={countproductdata}>

      <Router>
{/* // */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/productDetail' element={<HeaderCard />} />
          <Route path='/showitem' element={<CartItemscreen cart={cart} />} />
          <Route path='/dashboard' element={<CardItem product={productData} cart={cart} setCart={setCart} />} />
          <Route path='/paymentSucess' element={<ConfirmPayment />} />
          <Route path='/productDetail' element={<ProductDetails />} />
          <Route path="/adminpanel" element={<DashBoard/>} />
          <Route path="/createcard" element={<CreateCard/>} />
          
        </Routes>
      </Router>
    </UserContext.Provider>
   

  )
}
export default App

