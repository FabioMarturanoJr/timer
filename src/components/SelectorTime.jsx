import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectorTime extends Component {
  render() {
    const { handle } = this.props;
    return (
      <div className="Selector">
        <input name="hour" type="number" placeholder="hora" onChange={ handle } />
        <input name="minute" type="number" placeholder="minuto" onChange={ handle } />
        <input name="seconds" type="number" placeholder="segundo" onChange={ handle } />
      </div>
    );
  }
}

SelectorTime.propTypes = {
  handle: PropTypes.func.isRequired,
};

export default SelectorTime;
