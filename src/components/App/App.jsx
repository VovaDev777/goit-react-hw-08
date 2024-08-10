import ContactForm from "../ContactForm/ContactForm"
import SearchBox from '../SearchBox/SearchBox'
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from './App.module.css'
import '../../reset.css'
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";


const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div className={css.container}>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  )
}

export default App