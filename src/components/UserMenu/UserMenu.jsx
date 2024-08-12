import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { logOut } from '../../redux/auth/authOps';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  }
  return (
    <div>
        <p>Welcome, {user.name}</p>
        <button onClick={handleClick} type='button'>Logout</button>
    </div>
  )
}

export default UserMenu