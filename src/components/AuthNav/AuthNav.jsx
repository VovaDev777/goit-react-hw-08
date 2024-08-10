import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthNav = () => {
  return (
    <div>
        <NavLink to="/login" >Login</NavLink>
        <NavLink to="/register" >SignUp</NavLink>
    </div>
  )
}

export default AuthNav