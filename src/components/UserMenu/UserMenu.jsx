import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'

const UserMenu = () => {
  const user = useSelector(selectUser);
  return (
    <div>
        <p>Welcome, {user.name}</p>
        <button>Logout</button>
    </div>
  )
}

export default UserMenu