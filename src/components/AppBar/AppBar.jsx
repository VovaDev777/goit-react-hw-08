import React from 'react'
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <header>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/contacts" >Contacts</NavLink>
          <NavLink to="/login" >Login</NavLink>
          <NavLink to="/register" >SignUp</NavLink>
      </header>
  )
}

export default Navigation