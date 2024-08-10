import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contactsSlice';
import filtersReducer from '../redux/filters/filtersSlice';
import authReducer from '../redux/auth/slice'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    filters: filtersReducer
  },
});


export { store };
