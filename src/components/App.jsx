import {useState, useMemo, useEffect } from "react"
import { nanoid } from 'nanoid'
import { Form } from "./Form/Form";
import { Title } from './Title/Title';
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filtter/Filter";

// const useLocalStorage = (key, defaultValue) => {
//   const parseContacts = JSON.parse(window.localStorage.getItem(key));
//   const [state, setState] = useState(() => {
//     if (!parseContacts) { return defaultValue }
//     if (parseContacts.length > 0 ) { return parseContacts }
//     else return defaultValue;
//   });
  
//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// }


export const App = () => {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useLocalStorage("contactsLocalStorage", initialContacts);
    


  return (
      
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#fff',
        backgroundColor: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(191,4,171,0.6839985994397759) 35%, rgba(0,212,255,1) 100%)',
        width: '500px',
        height: 'auto',
        padding: '30px',
        margin: '0 auto',
        borderRadius: '10px',
      }}>
      <Title title='Phonebook'
      ></Title>
      < Form/>
      <Title title="Contacts"
      ></Title>
      <Filter/>
      <Contacts/>
    </div>
  );
};


  