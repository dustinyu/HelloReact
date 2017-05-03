import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Address from './Address';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    console.log('rendering Contact...');
    return (
      <div>
        <Name
          name={this.props.name}
          onClick={this.handleClick}
        />
        {
          this.state.isExpanded
          ? <Address address={this.props.address} />
          : null
        }
      </div>
    );
  }

  handleClick() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  static propTypes = {
    name: PropTypes.object,
    address: PropTypes.object
  }
}

export default Contact;
