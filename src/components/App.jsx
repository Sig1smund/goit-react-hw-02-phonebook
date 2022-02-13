import React, { Component } from "react";
import {isEqual} from 'lodash'
import { nanoid } from 'nanoid';
import ContactForm from "./contactForm";
import Filter from "./filter";
import ContactList from "./contactList";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  accumulateContacts = data => {
    console.log(data)
    const test = this.state.contacts.some((user) => isEqual(data, user));
    console.log(test)
    !test ? this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    })) : window.alert(`${data.name} is already in contacts!` )
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
    const { filter, contacts } = this.state;
    const eventChange = this.handleChange;

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm data={this.accumulateContacts} />
        <h2>Contacts</h2>
        <Filter eventHandler={this.handleFilteredItems} options={this.state.filter}/>
        <ContactList container={this.state.filter} contacts={this.state.contacts}/>  
      </div>
    )
  }
}

export default App;