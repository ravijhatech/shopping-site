// ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
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

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '20px', 
      justifyContent: 'center', 
      padding: '20px' 
    }}>
      {products.map(product => (
        <div key={product.id} style={{
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
        </div>
      ))}
    </div>
  );
};

export default ProductList;
