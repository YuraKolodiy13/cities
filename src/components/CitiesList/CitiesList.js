import React from 'react'
import {NavLink} from "react-router-dom";

const CitiesList = props => {
  return (
    <div className="cities">
      <div className='cities__items'>
        {props.cities.map((item, key) => (
          <div key={key} className='cities__item'>
            <div className="cities__img--wrap">
              <div className="cities__img" style={{backgroundImage: `url(${item._embedded['ua:images'].photos[0].image.mobile})`}}></div>
              <NavLink className='phones__link' to={'/city/' + item.name}></NavLink>
              <p>{item.name} <span>{item._embedded['ua:images'].photos[0].attribution.photographer}</span></p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CitiesList;