import React from 'react'

function ProductContexApi({cart}) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0?(<p>item in cart</p>):(cart.map((item,index)=>(
        <div key={index}>
            <strong>{item.title}</strong>
            <strong>{item.price}</strong>

</div>
      )))}
    </div>
  )
}

export default ProductContexApi
