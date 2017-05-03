import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import Address from './Address';

class App extends Component {

  render() {
    const mockAddress = {
       line1: '16 The Harbor',
       town: 'Newport',
       county: 'Gwent',
       country: 'Wales',
       zipCode: '10036'
     };

    let name = {
      firstName: 'Peter',
      lastName: 'Munro'
    };
    return (
      <div className="App">
        <Hello name={name} />
        { /* <Address {...mockAddress} /> */ }
        <Address address={mockAddress} />
      </div>
    );
  }
}

export default App;
