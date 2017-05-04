import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList';
import contacts from './contacts.json';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
