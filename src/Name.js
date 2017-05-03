import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Name extends Component {
  render() {
    return (
      <p onClick={this.props.onClick}>
        {this.props.name.firstName} {this.props.name.lastName}
      </p>
    );
  }
}

Name.propTypes = {
  name: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string
  }).isRequired
};

export default Name;
