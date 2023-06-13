import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import counterReducer from '../features/counter/counterSlice';
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from './filterSlice';

// const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});


