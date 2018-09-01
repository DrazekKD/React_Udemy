import React from 'react'

const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>name: {props.name}, age: {props.age}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
};

export default person;