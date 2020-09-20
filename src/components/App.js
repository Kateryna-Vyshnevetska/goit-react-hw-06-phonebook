import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import { v4 as uuidv4 } from "uuid";
import Filter from "./filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import {
  newContactAction,
  deleteContactAction,
  filterContactsAction,
} from "../redux/phoneBook/actions";

export default function App() {
  const { contacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const getContacts = (newContact) => {
    newContact["id"] = uuidv4();
    dispatch(newContactAction(newContact));
  };

  const deleteContact = (id) => {
    dispatch(deleteContactAction(id));
  };

  const getNamesByFilter = (value) => {
    dispatch(filterContactsAction(value));
  };

  return (
    <>
      <div className="section">
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title-anim"
          unmountOnExit
        >
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
        <ContactForm getContacts={getContacts} />
        <h2 className="title">Contacts</h2>
        <Filter
          getNamesByFilter={({ target: { value } }) => getNamesByFilter(value)}
        />
        <ContactList
          filteredItems={
            contacts.filter
              ? contacts.items.filter((elem) =>
                  elem.name
                    .toLowerCase()
                    .includes(contacts.filter.toLowerCase())
                )
              : contacts.items
          }
          getIdForDelete={deleteContact}
        />
      </div>
    </>
  );
}
