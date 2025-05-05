import React, { useState } from 'react';
import axios from 'axios';

const CreateCard = () => {
  const [formData, setFormData] = useState({
    title: '',
    price:'',
    des: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('price',formData.price);
    data.append('des', formData.des);
    data.append('image', formData.image);

    try {
      const res = await axios.post('/api/v1/upload', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
          },
      }
        
      );
      console.log('Card created:', res);
      alert('Card created successfully!');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    }
  };

  return (
    <>
    <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">ADD TO CARD</h2>
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      
    <form onSubmit={handleSubmit}className="bg-white p-10 rounded shadow-md w-96">
      <input 
      name="title" 
      placeholder="Title"
       onChange={handleChange} 
       className="w-full p-2 mb-4 border rounded"
       required />
      <input 
      name="des" 
      placeholder="Description"
       onChange={handleChange} 
       className="w-full p-2 mb-4 border rounded"
       required />
        <input 
      name="price" 
      placeholder="price"
       onChange={handleChange} 
       className="w-full p-2 mb-4 border rounded"
       required />
      <input 
      name="image"
       type="file"
        accept="image/*"
         onChange={handleChange} 
         className="w-full p-2 mb-4 border rounded"
         required />
      <button type="submit" style={{color:'white',cursor:'pointer',backgroundColor:'green',height:'40px',width:'100%',borderRadius:'5px'}}>Add Product</button>
    </form>
    </div>
    </>
  );
};

export default CreateCard;
