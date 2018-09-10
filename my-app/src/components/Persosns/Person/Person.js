import React from 'react';
import classes from './Person.scss';

const person = (props) => {
    return(
        <div
            className={classes.person}>
            <p className={classes.text}>{props.name}</p>
            <input
                type="text"
                onChange={props.change}
                value={props.name}/>
            <button
                className={classes.delete}
                onClick={props.delete}>
                Delete</button>
        </div>
    );
};

export default person