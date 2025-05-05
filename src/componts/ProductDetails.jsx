import React from 'react'
import { useLocation } from 'react-router-dom'

function ProductDetails() {
    const location = useLocation();
    const {product} = location.state || {};
    
  return (
    
     <div>
        <h2> Product details</h2>
        {
            product?(<ul> {product.map((item,index)=>(
               <div>
                 <li key={index}></li>
                 <h1>{item.title}</h1>
               </div>
            ))}</ul>):(<p></p>)
        }
     </div>
      
    
    
  )
}

export default ProductDetails
