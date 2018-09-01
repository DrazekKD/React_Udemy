import React from 'react';

    const inputCountry = (props) => {
      return(
          <div>
              <input type="text" value={props.road} onChange={props.changeRoad}/>
              <input type="text" value={props.city} onChange={props.changeCity}/>
          </div>
      );
    };

export default inputCountry;