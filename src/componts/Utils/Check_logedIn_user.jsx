// utils/auth.js
import axios from 'axios';

export const isLoggedIn = async () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const res = await axios.get('/api/v1/check-user', {
      headers: { Authorization: token },
    });
    return res.data.valid;
  } catch {
    return false;
  }
};
