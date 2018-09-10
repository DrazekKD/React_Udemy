import React from "react";
import Person from "./Person/Person";

const persons = (props) => props.persons.map((person, index) =>{
	return <Person name={person.name}
				change={(event) => props.changed(event, person.id)}
				delete={() => props.click(index)}
				key={person.id}/>
});

export default persons;