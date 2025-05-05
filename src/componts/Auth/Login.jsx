import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../Utils/Check_logedIn_user';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
    const check = async () => {
      const loggedIn = await isLoggedIn();
      if (loggedIn) navigate('/dashboard');
    };
    check();
  }, [navigate]);
  const ForgotScrren =()=>{
    navigate('/forgot-password');
  }
  const RegistrationScreen =()=>{
    navigate('/register');
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/login', form);
      toast.success('Login successfully!');
      localStorage.setItem('token', res.data.token);
      
      setForm({
        email:"",
        password:""
      })
      navigate('/dashboard');
    } catch (err) {
    toast.error("Invalid Email and Password !")
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
        
      <span style={{display:'flex',fontSize:'16px',justifyContent:'center',marginTop:'5px'}} >
      <p>Create new Account</p>
      <p onClick={RegistrationScreen} style={{fontWeight:'bold',color:'green',cursor:'pointer'}}>Register</p>
      </span>
      <span style={{display:'flex',fontSize:'12px',justifyContent:'center',marginTop:'5px',cursor:'pointer'}} >
      <p onClick={ForgotScrren}>Forgot Password ?</p>
      </span>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
