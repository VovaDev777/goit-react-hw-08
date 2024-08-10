import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {

const filteredContacts = useSelector(selectFilteredContacts);

// console.log(filteredContacts);

  return (
    <div className={css.container}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  )
}

export default ContactList