import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';

class App extends Component {

  render() {
    const mockAddress = {
       line1: '16 The Harbor',
       town: 'Newport',
       county: 'Gwent',
       country: 'Wales'
     };

    let name = {
      firstName: 'Peter',
      lastName: 'Munro'
    };
    return (
      <div className="App">
        <Contact name={name} address={mockAddress} />
      </div>
    );
  }
}

export default App;
