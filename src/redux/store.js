import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contactsSlice';
import filtersReducer from '../redux/filters/filtersSlice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer
// });

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer
  },
});


export { store };
