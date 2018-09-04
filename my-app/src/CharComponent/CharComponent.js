import React from 'react'

const charComponent = (props) =>{
	const style =  {
		padding: '20px',
		border: '1px solid black',
		color: 'red',
		width:'50px',
		margin: '20px auto'
	};

	return(<p onClick={props.clicked} style={style}>{props.characters}</p>)
};

export default charComponent;