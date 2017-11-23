
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Content extends Component {
  constructor()
  {
    super();
    this.state =
    {
      count: 0
    };
  }

  render() {
    const { body } = this.props;

    return (
      <div className="Content">
        <h1>Counter: {this.state.count}</h1>
      </div>
    );
  }
}

export default Content;
