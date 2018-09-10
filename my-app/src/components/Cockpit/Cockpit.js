import React from 'react';
import classes from "./Cockpit.scss";
const cockpit = (props) => {
	return(
		<div>
			<button onClick={props.reset}>Reset</button>
			<button
				onClick={props.setShowPersons}
				className={[props.showPersons === true ? classes.hidden: classes.show, classes.btn].join(' ') }>
				{props.showPersons === true ? 'hidden' : 'show'}</button>
		</div>
	);
};

export default cockpit;