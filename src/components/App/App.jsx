// import "./App.module.css";

import ContactList from "../ContactList/ContactList.jsx";
import contactsData from "../../contactsData.json";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    return savedContacts ? JSON.parse(savedContacts) : contactsData;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchValue, setSearchValue] = useState("");
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { ...newContact, id: nanoid() }];
    });
  };

  const delContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox
        searchValue={searchValue}
        setSearchValue={(evt) => setSearchValue(evt.target.value)}
      />
      <ContactList
        contactsData={searchValue ? filterContacts : contacts}
        delContact={delContact}
      />
    </div>
  );
}

export default App;
