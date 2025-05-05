import React from 'react'
import { useCart } from './CardContex'

function ShowCard() {
    const {cartItem} =useCart();
  return (
    <div>
      <h2>Cart Details</h2>
      {cartItem.length === 0 ? (<h1>no item</h1>):(cartItem.map((item,index)=>(
        <div key={index}>
            <p>{item.title}</p>
             </div>
      )))}
    </div>
  )
}

export default ShowCard
