import { AppCont } from './App.styled';
import { useEffect, useState } from 'react';
import generateId from '../tools/idRandomize';
import Form from '../Form/Form';
import Search from '../Search/Search';
import List from '../List/LIst';

const KEY = "Contact-List";

export default function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(KEY)) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);


  const hendleFilter = ({ currentTarget: { value } }) => {
    setFilter(value);
  };

  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const hendleContactRemove = ({ currentTarget: { id } }) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const SubmitFormhendler = (formData) => {
    const findeErr = contacts.find(contact => contact.name.toLowerCase() === formData.get('name').toLowerCase())
    if (findeErr) {
      alert('вийди звідси розбійник');
      return
    };
    setContacts([...contacts, { id: generateId(), name: formData.get('name'), phone: formData.get('number') }]);
  };

  const app =
    <AppCont>
      <h1>Phonebook</h1>
      <Form onSubmit={SubmitFormhendler} />
      <h2>Contact</h2>
      <Search hendleFilter={hendleFilter} filter={filter} />
      <List getFilterContacts={getFilterContacts()} hendleContactRemove={hendleContactRemove} />
    </AppCont>
  return app;
};


