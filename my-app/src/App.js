import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/Output';
import UserInput from './UserInput/UserInput'
class App extends Component {

    state = {
        country: [
            {road: '1 Maja', city: 'Wolbrom'}
        ]
    };

    switchRoadHandle = (event) => {
        this.setState({
            country: [
                {road: event.target.value, city: this.state.country[0].city}
            ]
        })
    };

    switchCityHandle = (event) => {
        this.setState({
            country: [
                {road: this.state.country[0].road, city: event.target.value}
            ]
        })
    };

    resetCountry = () => {
        this.setState({
            country: [
                {road: '1 Maja', city: 'Wolbrom'}
            ]
        });
    };

  render() {
    return (
      <div className="App">
          <UserOutput
              road={this.state.country[0].road}
              city={this.state.country[0].city}/>
          <UserInput
              road={this.state.country[0].road}
              city={this.state.country[0].city}
              changeRoad={this.switchRoadHandle}
              changeCity={this.switchCityHandle}/>
          <button onClick={this.resetCountry}>Reset</button>
      </div>
    );
  }
}

export default App;
