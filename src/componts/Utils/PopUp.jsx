import React, { useState } from 'react';

export const LogoutCard = ({ onConfirm, onCancel }) => (
  <div style={styles.card}>
    <p>Are you sure you want to logout?</p>
    <div style={styles.buttons}>
      <button onClick={onConfirm} style={styles.yes}>Yes</button>
      <button onClick={onCancel} style={styles.no}>No</button>
    </div>
  </div>
);

const styles = {
  card: {
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  buttons: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  yes: {
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
  },
  no: {
    backgroundColor: '#1890ff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
  },
};
