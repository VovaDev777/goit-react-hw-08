import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
        <nav>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/contacts" >Contacts</NavLink>
          <NavLink to="/login" >Login</NavLink>
          <NavLink to="/register" >SignUp</NavLink>
        </nav>
      </header>
  )
}

export default Navigation