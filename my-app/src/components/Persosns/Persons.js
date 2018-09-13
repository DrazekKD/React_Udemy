import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component{

	shouldComponentUpdate ( nextProps, nextState) {
		console.log('change');
		return nextProps.persons !== this.props.persons;
	}
	render() {
		return this.props.persons.map((person, index) =>{
			return <Person name={person.name}
						   change={(event) => this.props.changed(event, person.id)}
						   delete={() => this.props.click(index)}
						   key={person.id}/>
		});
	}
}

export default Persons;