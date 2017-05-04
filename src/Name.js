import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Name extends Component {
  render() {
    return (
      <div>
        <p onClick={this.props.onClick}>
          {this.props.name.firstName} {this.props.name.lastName}
        </p>
      </div>
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
