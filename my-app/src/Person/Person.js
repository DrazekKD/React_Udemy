import React from 'react'

const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>{props.name} {props.age}</p>
			<input type="text" onChange={props.change} value={props.name}/>
        </div>

    );
};

export default person;