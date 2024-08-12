import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contactsSlice';
import filtersReducer from '../redux/filters/filtersSlice';
import authReducer from '../redux/auth/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
}
 
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistedAuthReducer,
    filters: filtersReducer
  },
});

export const persistor = persistStore(store);
export { store };
