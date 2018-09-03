import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/Output';
import UserInput from './UserInput/UserInput'
class App extends Component {

    state = {
        country: [
            {road: '1 Maja', city: 'Wolbrom'}
        ],
        showElement: [
            {show: false, text: 'Show'}
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

    toogleCityHandler = () => {
       this.setState({
		showElement: [
			{show: !this.state.showElement[0].show}
		]
       });
    };

  render() {
	  let cityDOM = null;

	  if( this.state.showElement[0].show ) {
		cityDOM = (
			<div>
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
    return (
      <div className="App">
          {cityDOM}
          <button onClick={this.toogleCityHandler}>{this.state.showElement[0].show === true ? 'hidden':  'show'}</button>
      </div>
    );
  }
}

export default App;
