import React from 'react';

const Output = (props) => {
    return(
        <div>
            <p>Road: {props.road.charAt(0).toLocaleUpperCase() + props.road.slice(1)},
                City: {props.city.charAt(0).toLocaleUpperCase() + props.city.slice(1)}</p>
        </div>
    );
};

export default  Output;