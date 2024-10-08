import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import css from './Navigation.module.css'

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <div className={css.con}>
        <NavLink to="/" className={css.link}>Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts" className={css.link}>Contacts</NavLink>}
        
    </div>
  )
}

export default Navigation