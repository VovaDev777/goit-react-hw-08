import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import "../../reset.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import Navigation from "../AppBar/AppBar";
import Layout from "../Layout/Layout";

const App = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    // <div className={css.container}>
    //   <h1 className={css.text}>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   {loading && <Loader />}
    //   {error && <ErrorMessage />}
    //   <ContactList />
    // </div>
    <>
    <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
};

export default App;
