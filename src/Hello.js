import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  render() {
    return (
      <p>
        Hello {this.props.name.firstName} {this.props.name.lastName}
      </p>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string
  }).isRequired
};

export default Hello;
