import React, { useContext, useState } from 'react'
import "./headerCard.css"
import { Row, Stack } from 'react-bootstrap'
import { FaEllipsisV, FaSearch, FaShoppingCart, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { FaStore } from 'react-icons/fa6'
import shoppingmartLogo from "../assets/shoppingmart.jpg"
import { IoPersonCircleOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from './Countcontext'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { CiLogout } from 'react-icons/ci'
import IconLabel from './IconLabel'
import { LogoutCard } from './Utils/PopUp'
import { toast, ToastContainer } from 'react-toastify'


function HeaderCard() {
  const [showLogoutCard, setShowLogoutCard] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [open ,setOpen] =useState(false)
  const navigator = useNavigate();
  const datacount = useContext(UserContext);

  const handleLogoutClick = () => {
    setShowLogoutCard(true);
  };
  const DashboardScreen =()=>{
    navigator('/adminpanel');
  }

  const confirmLogout = () => {
    setShowLogoutCard(false);
    localStorage.removeItem('token');
    navigator('/');
    toast.success('Logout successfully!');
  };

  const cancelLogout = () => {
    setShowLogoutCard(false);
  };

  
  const toggleMenu = () => {
    setOpen(prev => !prev);
  };

  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigator('/');
  }
 


  return (

    <header style={{
      width: '100%', backgroundColor: "blue", color: 'black', padding: '16px',
      textAlign: 'center', justifyContent: "space-around",
    }}>
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between space-x-2 '>
        <img className='h-14 w-auto sm:h-20 rounded' src={shoppingmartLogo} height={50} width={80} />
        <div className='input-group'>
          <span className='icon'><FaSearch /></span>
          <input  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' placeholder='Search for Products' />
        </div>

        <span style={{ display: 'flex' }}>
          <IoPersonCircleOutline size={20} color='white' />
          <label style={{ color: 'white' }} htmlFor=' AddCart'>Login</label>
        </span>

        <span style={{ display: 'flex' }}>

          <p style={{ color: 'white', fontSize: "10px", height: '15px', width: '15px', borderRadius: '20px', backgroundColor: datacount === 0 ? "" : "black" }}>{datacount === 0 ? "" : datacount}</p>
          <FaShoppingCart style={{ cursor: 'pointer' }} onClick={() => navigator("/showitem")} size={20} color='white' />
          <label style={{ color: 'white' }} htmlFor=' AddCart'>Cart</label>
        </span>

        <span style={{ display: 'flex' }}>
          <FaStore size={20} color='white' />
          <label style={{ color: 'white' }} htmlFor=' AddCart'>Become a Seller</label>
        </span>

        <div className="menu-container">
      <div  className="dots" onClick={toggleMenu}>
        ⋮
      </div>
      {open && (
        <ul className="menu-list">
          <li onClick={DashboardScreen} >Admin Panel</li>
          <li>Delete</li>
          
      <button onClick={handleLogoutClick}>Logout</button>
      {showLogoutCard && (
        <LogoutCard onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    
        </ul>
      )}
    </div>
    <ToastContainer />
      </div>





    </header>

  )
}

export default HeaderCard
