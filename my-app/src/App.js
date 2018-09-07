import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
class App extends Component {

constructor(props) {
  super(props);
  this.state  = {
    inputText: ''
  };
    this.changeValueInputHandler = this.changeValueInputHandler.bind(this);
}

  changeValueInputHandler = (event) => {
    this.setState({inputText: event.target.value})
  };

	deleteCharacter = (index) => {
      const text = this.state.inputText.split('');
      text.splice(index,1);
      const updateText = text.join('');
      this.setState({inputText: updateText});
	};
	render() {

    let validLength = 'Długość jest poprawna';

    if(this.state.inputText.length < 5){
      validLength = 'Za krótki tekst'
    }

	let charsComponents = this.state.inputText.split('').map((ch,index)=> {
	  let classes= [];
	  if(index % 2 === 0 ){
	    classes.push('green');
      }else {
	    classes.push('blue');
      }
      return <CharComponent
                  clicked={() => this.deleteCharacter(index)}
                  characters={ch}
                  key={index}
                  classes={classes.join(' ')}/>
    });

    return (
      <div className="App">
		  <input
              type="text"
              onChange={this.changeValueInputHandler}
              value={this.state.inputText}/>
          {validLength}
          {charsComponents}
      </div>
    );
  }
}

export default App;

//npm run eject
