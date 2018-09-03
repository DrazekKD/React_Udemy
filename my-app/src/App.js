import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person'
class App extends Component {

	state= {
		persons: [
			{id:'112sd', name: 'Kamil', age:'12'},
			{id:'2ada', name: 'Wojtek', age:'18'},
			{id:'213dwq', name: 'Kamila', age:'32'},
		],
		showPerson: false
	};
	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});
		console.log(id);
		const person = {
			...this.state.persons[personIndex]
		};
		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState( {persons: persons} );
	};

	togglePersonHandler = () => {
		this.setState({
			showPerson: !this.state.showPerson
		});
	};

	deletePersonHandler = (indexPerson) => {
		const persons = [...this.state.persons];
		persons.splice(indexPerson, 1);

		this.setState({persons: persons,});
	};
  render() {
	let persons = null;
	if(this.state.showPerson) {
		persons = (
			<div>
				{this.state.persons.map((person, index) => {
					return(
						<Person
							click={() => this.deletePersonHandler(index)}
							change={(event) => this.nameChangeHandler(event, person.id)}
							name={person.name}
							age={person.age}
							key={person.id}/>
					);
				})}
			</div>
		);
	}

    return (
      <div className="App">
		  {persons}
		  <button onClick={this.togglePersonHandler}>{this.state.showPerson === false ? 'Show': 'Hidden'}</button>
      </div>
    );
  }
}

export default App;
