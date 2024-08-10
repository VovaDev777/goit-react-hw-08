import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

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
