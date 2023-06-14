import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { contactsReducer } from "./contactsSlice";
// import { filterReducer } from './filterSlice';
import {reducer} from './reducer'

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}
 
const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({reducer: persistedReducer});

export const persistor = persistStore(store);


// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }