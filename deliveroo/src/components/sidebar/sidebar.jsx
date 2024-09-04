import React from 'react'
import  './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <h5>Add Restaurant</h5>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <h5>Restaurant Items</h5>
        </NavLink>
        <NavLink to='/order' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <h5>Order</h5>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar

