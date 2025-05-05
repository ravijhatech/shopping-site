import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
  const navigator = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const LoginScreen =()=>{
    navigator('/');
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/v1/register', form);
      toast.success('Registration successful!');
      setForm({
        name:"",
        email:"",
        password:""
      })
      navigator('/');
    } catch (err) {
      toast.error('Registration Failed !');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input name="name" onChange={handleChange} placeholder="Name" className="mb-4 p-2 w-full border" />
        <input name="email" onChange={handleChange} placeholder="Email" className="mb-4 p-2 w-full border" />
        <input name="password" onChange={handleChange} type="password" placeholder="Password" className="mb-4 p-2 w-full border" />
        <button onClick={handleSubmit} type="submit" className="bg-blue-500 text-white w-full py-2">Register</button>
        <span style={{display:'flex',fontSize:'16px',justifyContent:'center',marginTop:'5px',cursor:'pointer'}} >
      <p>Already Register</p>
      <p onClick={LoginScreen} style={{color:'green'}}>Login</p>
      </span>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Register;
