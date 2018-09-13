import PropTypes from "prop-types";
import React, {Component} from 'react';
import classes from './Person.scss';

class Person extends Component{
	render() {
		return (
			<div className={classes.person}>
				<p className={classes.text}>{this.props.name}</p>
				<input
					type="text"
					onChange={this.props.change}
					value={this.props.name}/>
				<button
					className={classes.delete}
					onClick={this.props.delete}>
					Delete
				</button>
			</div>
		)
	}
}
Person.propTypes = {
	name: PropTypes.string,
	change: PropTypes.func,
	delete: PropTypes.func,
};

export default Person;