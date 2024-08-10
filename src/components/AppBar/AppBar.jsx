import React from 'react'
import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <UserMenu />
      <AuthNav />
          {/* <NavLink to="/" >Home</NavLink>
          <NavLink to="/contacts" >Contacts</NavLink>
          <NavLink to="/login" >Login</NavLink>
          <NavLink to="/register" >SignUp</NavLink> */}
      </header>
  )
}

export default Navigation