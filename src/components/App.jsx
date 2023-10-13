import { nanoid } from 'nanoid'

import { useEffect } from "react";
import { Form } from "./ContactForm";
import { ContactsList } from "./ContactsList.jsx";
import { Filter } from "./Filter";

import { useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contact')) || [])
  const [filter, setFilter] = useState('')


  const setAddContacts = ({ name, number }) => {
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`)
    } setContacts(
      [...contacts, { name, number, id: nanoid() }],
    )
  }

  const handleChange = value => {
    setFilter(value);
  };
  const handelDelete = (id) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id)
    )
  }

  useEffect(() => {
    const normaliedContact = JSON.stringify(contacts);
    localStorage.setItem('contact', normaliedContact)
  }, [contacts]);




  const getFileredContacts = () => !filter ? contacts : contacts.filter(({ name }) => name.toLowerCase().includes(filter))
  return (
    <div>
      <h1>Phonebook</h1>
      <Form setAddContacts={setAddContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={handleChange} />
      <ContactsList contacts={getFileredContacts()} handelDelete={handelDelete} />
    </div >
  );
}


