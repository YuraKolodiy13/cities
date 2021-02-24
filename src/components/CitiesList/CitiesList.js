import React, {useState} from 'react'
import {NavLink} from "react-router-dom";

const CitiesList = props => {
  const [visible, setVisible] = useState(20);
  return (
    <div className="cities">
      <div className='cities__items'>
        {props.cities.slice(0, visible).map((item, key) => (
          <div key={key} className='cities__item'>
            <div className="cities__img--wrap">
              <div className="cities__img" style={{backgroundImage: `url(${item._embedded['ua:images'].photos[0].image.mobile})`}}/>
              <NavLink className='phones__link' to={'/city/' + item.name}/>
              <p>{item.name}</p>
            </div>
          </div>
        ))}

        {visible < props.cities.length &&
          <button style={{margin: 'auto'}} onClick={() => setVisible(visible + 20)} type="button">Load more</button>
        }
      </div>

    </div>
  )
};

export default CitiesList;