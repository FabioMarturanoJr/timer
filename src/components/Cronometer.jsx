import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TEN = 10;

class Cronometer extends Component {
  constructor(props) {
    super(props);

    const { hour, minute, seconds } = this.props;
    this.state = {
      seconds: this.lessThanZero(seconds),
      minute: this.lessThanZero(minute),
      hour: this.lessThanZero(hour),
    };
  }

  componentDidMount() {
    const TIMER_SPEED = 1000;
    this.cronometerInterval = setInterval(() => {
      this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
    }, TIMER_SPEED);
  }

  componentDidUpdate({ cronometerOnOffSwitch }, { seconds, minute, hour }) {
    const MIN_SECOND = 0;
    const MIN_MINUTE = 0;
    const MIN_HOUR = 0;
    const S9 = 59;

    if (hour === MIN_HOUR && minute === MIN_MINUTE && seconds === MIN_SECOND) {
      this.setState({ seconds: S9, minute: S9, hour: 1 });
      cronometerOnOffSwitch();
      alert('Tempo Esgotado');
    }
    if (minute === MIN_MINUTE && seconds === MIN_SECOND) {
      this.setState((old) => ({ seconds: S9, minute: S9, hour: old.hour - 1 }));
    }
    if (seconds === MIN_SECOND) {
      this.setState((old) => ({ seconds: S9, minute: old.minute - 1 }));
    }
  }

  componentWillUnmount() {
    clearInterval(this.cronometerInterval);
    const { resetStateTimer } = this.props;
    resetStateTimer();
  }

  lessThanZero = (number) => (number < 0 ? 0 : number);

  BellowTen = (number) => (number < TEN ? `0${number}` : number);

  render() {
    const { seconds, minute, hour } = this.state;

    return (
      <h2 className="timer">
        { `${this.BellowTen(hour)}:${this.BellowTen(minute)}:${this.BellowTen(seconds)}`}
      </h2>
    );
  }
}

Cronometer.propTypes = {
  cronometerOnOffSwitch: PropTypes.func.isRequired,
  resetStateTimer: PropTypes.func.isRequired,
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default Cronometer;
