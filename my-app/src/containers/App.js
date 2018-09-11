import React, { Component } from 'react';
import Persons from '../components/Persosns/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import classes from './App.scss'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          persons: [
              {id:'1', name:'Kamil'},
              {id:'2', name:'Julka'},
              {id:'3', name:'Ala'} ],

          showPersons: true
        };
    }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id ;
    });

    const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    console.log(person);
    this.setState({persons: persons});
  };

  deletePersons = (index) => {
    const persosns = [...this.state.persons];
    persosns.splice(index,1);

    this.setState({persons: persosns});
  };

  reset = () => {
    const persosns = [
            {id:'1', name:'Kamil'},
            {id:'2', name:'Julka'},
            {id:'3', name:'Ala'} ];
    this.setState({persons: persosns});
  };

  setShowPersons = () => {
    this.setState({
        showPersons: !this.state.showPersons
    });
  };

  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = <Persons
                persons={this.state.persons}
                changed={this.changeNameHandler}
                click={this.deletePersons}/>
    }
    return (
      <div className={classes.App}>
          {persons}
          <Cockpit
              reset={this.reset}
			  setShowPersons={this.setShowPersons}
              showPersons={this.state.showPersons}/>
      </div>
    );
  }
}

export default App;
