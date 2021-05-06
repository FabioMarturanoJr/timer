import React from 'react';
import './App.css';
import Cronometer from './components/Cronometer';
import SelectorTime from './components/SelectorTime';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCronometer: false,
      seconds: 0,
      minute: 0,
      hour: 0,
    };

    this.cronometerOnOffSwitch = this.cronometerOnOffSwitch.bind(this);
  }

  handle = ({ target: { name, value, type, checked } }) => {
    let values = type === 'checkbox' ? checked : value;
    values = type === 'number' ? Number(value) : values;
    this.setState({ [name]: values });
  }

  resetStateTimer = () => {
    this.setState({ seconds: 0, minute: 0, hour: 0 });
  }

  cronometerOnOffSwitch() {
    this.setState((prevState) => ({ showCronometer: !prevState.showCronometer }));
  }

  render() {
    const { showCronometer, hour, minute, seconds } = this.state;
    return (
      <main className="App">
        <section className="App-header">
          { showCronometer
            && <Cronometer
              cronometerOnOffSwitch={ this.cronometerOnOffSwitch }
              resetStateTimer={ this.resetStateTimer }
              seconds={ seconds }
              minute={ minute }
              hour={ hour }
            />}
          { !showCronometer && <SelectorTime handle={ this.handle } /> }
        </section>

        <button
          type="button"
          onClick={ this.cronometerOnOffSwitch }
        >
          { showCronometer ? 'Desligar Timer' : 'Ligar Timer' }
        </button>
      </main>
    );
  }
}

export default App;
