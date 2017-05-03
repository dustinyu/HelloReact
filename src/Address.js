import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Address.propTypes = {
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    zipCode: PropTypes.string
  }).isRequired
};

export default Address;
