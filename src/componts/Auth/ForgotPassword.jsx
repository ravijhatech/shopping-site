
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';


const ForgotPassword = () => {
  const navigator = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: '',
    otp: '',
    password: '',
    confirmPassword: '',
  });
  const [msg, setMsg] = useState('');
  const [timer, setTimer] = useState(100);
  const [isResendDisable, setIsResendDisable] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setIsResendDisable(false);
      return;

    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResendOtp = async () => {
    try {
      const res = await axios.post('/api/v1/resend-otp', { email: form.email });
      // write resend  new otp send messages here write
      toast.success("Send OTP Your Email !");
      setTimer(100);
      setIsResendDisable(true);
    } catch (error) {
      // failed to resend otp messages here write
      toast.error("Sending OTP Failed !");
     

    }
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendOtp = async () => {
    try {
      await axios.post('/api/v1/send-otp', { email: form.email });
      setStep(2);
      toast.success('OTP sent to your email');
    } catch {
      toast.warning('Email Not Found');
    }
  };

  const verifyOtp = async () => {
    try {
      await axios.post('/api/v1/verify-otp', {
        email: form.email,
        otp: form.otp,
      });
      setStep(3);

      toast.success('OTP verified Sucessfully !');

    } catch {
      toast.warning('Invalid or Expired OTP');
    }
  };

  const resetPassword = async () => {
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      await axios.post('/api/v1/reset-password', {
        email: form.email,
        password: form.password,
      });
      setStep(4);
      toast.success('Password Reset Successfully !');
      setForm({
        email: "",
        otp: "",
        password: "",
        confirmPassword: ""
      })
      navigator('/');
    } catch {
      toast.error('Error Not Reset Password');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        {step === 1 && (
          <>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border mb-4"
            />
            <button onClick={sendOtp} className="w-full bg-blue-600 text-white p-2 rounded">
              Send OTP
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <input
              type="text"
              name="otp"
              onChange={handleChange}
              placeholder="Enter OTP"
              className="w-full p-2 border mb-4"
            />
            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button style={{ marginBottom: '10px' }} onClick={handleResendOtp}>Resend OTP</Button>
              <p>Resend OTP in {timer}</p>

            </span>
            <button onClick={verifyOtp} className="w-full bg-green-600 text-white p-2 rounded">
              Verify OTP
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <input
              type="newPassword"
              name="password"
              onChange={handleChange}
              placeholder="New Password"
              className="w-full p-2 border mb-4"
            />
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-2 border mb-4"
            />
            <button onClick={resetPassword} className="w-full bg-purple-600 text-white p-2 rounded">
              Reset Password
            </button>
          </>
        )}
        {step === 4 && <p className="text-green-600 text-center">Password reset successful.</p>}


      </div>
      <ToastContainer/>
    </div>
  );
};

export default ForgotPassword;
