import React, { Component } from 'react';

class Address extends Component {
  render() {
    let address = this.props.address;
    return (
      <div>
        <p>{address.line1}</p>
        <p>{address.town}</p>
        <p>{address.county}</p>
        <p>{address.country}</p>
        <p>{address.zipCode}</p>
      </div>
    );
  }
}

export default Address;
