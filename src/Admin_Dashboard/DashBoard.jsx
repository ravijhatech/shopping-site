import React from 'react'
import { FaHistory, FaPlus, FaSearch, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
    const navigator = useNavigate();
    const CreateCardScreen =()=>{
navigator('/createcard');
    }
  return (
    <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px', 
        justifyContent: 'center', 
        padding: '20px' 
      }}>
        
          <div onClick={CreateCardScreen} style={{
            backgroundColor:'blue',
            color:'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '200px',
            padding: '16px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
           
           <div>
           <h4 style={{ fontSize: '16px', height: '40px', overflow: 'hidden' }}> Add New Item</h4>
           <FaPlus style={{marginLeft:'75px'}}/>
           
           </div>
           
          </div>

          <div style={{
            backgroundColor:'blue',
            color:'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '200px',
            padding: '16px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
           
           <div>
           <h4 style={{ fontSize: '16px', height: '40px', overflow: 'hidden' }}> Search Product</h4>
           <FaSearch style={{marginLeft:'75px'}}/>
           
           </div>
           
          </div>
          <div style={{
            backgroundColor:'blue',
            color:'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '200px',
            padding: '16px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
           
           <div>
           <h4 style={{ fontSize: '16px', height: '40px', overflow: 'hidden' }}> Delete Product</h4>
           <FaTrash style={{marginLeft:'75px'}}/>
           
           </div>
           
          </div>
          <div style={{
            backgroundColor:'blue',
            color:'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '200px',
            padding: '16px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
           
           <div>
           <h4 style={{ fontSize: '16px', height: '40px', overflow: 'hidden' }}>Check All History</h4>
           <FaHistory style={{marginLeft:'75px'}}/>
           
           </div>
           
          </div>
        
      </div>
    );
  };


export default DashBoard
