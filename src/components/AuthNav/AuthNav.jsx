import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <div className={css.con}>
        <NavLink to="/login" className={css.text}>Login</NavLink>
        <NavLink to="/register" className={css.text}>SignUp</NavLink>
    </div>
  )
}

export default AuthNav