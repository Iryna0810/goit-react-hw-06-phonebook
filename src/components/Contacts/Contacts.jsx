import React from 'react';
import { useMemo } from 'react';
// import PropTypes from 'prop-types';
import { List, Button } from '../styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../redux/contactsSlice';

export const Contacts = () => {
    
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter.value.toLowerCase());
    
    // const normalizedFilter = filter.toLowerCase();

    const visibleContacts = useMemo(() => {
    if (!filter) return contacts;
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter))
    }, [contacts, filter])
    console.log(contacts);

    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contacts.id));

    // eslint-disable-next-line no-lone-blocks
    {return <List> {visibleContacts.map(({ name, id, number }) => <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <Button type="submit"
                onClick={() => handleDelete(id)}
            >Delete</Button>
        </li>)}
        </List>
    }
}

// Contacts.propTypes = {
//     contactsList: PropTypes.array,
//     onDeleteContact: PropTypes.func,
// };
