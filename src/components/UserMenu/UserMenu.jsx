import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.con}>
      <p className={css.name}>Welcome, {user.name}</p>
      <button onClick={handleClick} type="button" className={css.btn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
