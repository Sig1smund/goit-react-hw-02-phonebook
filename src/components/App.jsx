import React, { Component } from "react";
import {isEqual} from 'lodash'
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import ContactsItem from "./ContactItem";
import s from './ContactForm/contactForm.module.css'

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  eraseContact = (elem) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== elem),
    }));
  }

  accumulateContacts = (data) => {
    const test = this.state.contacts.some((user) => isEqual(data, user));
    !test ? this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    })) : alert(`${data.name} is already in contacts!` )
  }

  handleFilteredItems = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  filteredItems = () => {
    const { filter, contacts } = this.state;
    const loweredFilter = filter.toLowerCase();
    
    return contacts.filter(elem => elem.name.toLowerCase().includes(loweredFilter));

  }

  render() {

    return (
      <div className={s.container}>
        <div className={s.form_container}>
          <h2 className={s.title}>Phonebook</h2>
          <ContactForm data={this.accumulateContacts} />
          <h2 className={s.title}>Contacts</h2>
          <Filter eventHandler={this.handleFilteredItems} options={this.state.filter}/>
        </div>
        <ContactList>
          <ContactsItem erase={this.eraseContact} filtered={this.filteredItems}/>
        </ContactList>
      </div>
    )
  }
}

export default App;