import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
class App extends Component {

// <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
// <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
// <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
// <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
// <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
// <li>When you click a CharComponent, it should be removed from the entered text.</li>
// </ol>
// <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
constructor(props) {
  super(props);
  this.state  = {
    inputText: ' '
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
      return <CharComponent
                  clicked={() => this.deleteCharacter(index)}
                  characters={ch}
                  key={index}/>
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
