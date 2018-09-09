import React, { Component } from 'react';
import Person from './Person/Person';

import classes from './App.scss'

class App extends Component {
    state = {
      persons: [
          {id:'1', name:'Kamil'},
          {id:'2', name:'Julka'},
          {id:'3', name:'Ola'} ],

      showPersons: true
    };

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
            {id:'3', name:'Ola'} ];
    this.setState({persons: persosns});

  };
  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = (
          <div>
              {
                this.state.persons.map((person, index) => {
                  return(
                      <Person name={person.name}
                              change={(event) => this.changeNameHandler(event, person.id)}
                              delete={() => this.deletePersons(index)}
                              key={index}/>
                  );
                })
              }
          </div>
      )

    };

    return (
      <div className={classes.App}>
          {persons}
          <div>
              <button onClick={this.reset}>Reset</button>
          </div>
      </div>
    );
  }
}

export default App;
