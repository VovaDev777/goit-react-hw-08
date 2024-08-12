// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import "../../reset.css";
import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contacts/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
// import Navigation from "../AppBar/AppBar";
import Layout from "../Layout/Layout";
import { refreshUser } from "../../redux/auth/authOps";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../Routes/RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Please wait...</div>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo={"/tasks"}/>} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
