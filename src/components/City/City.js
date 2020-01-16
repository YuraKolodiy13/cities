import React from 'react'
import './City.scss'
import {NavLink} from "react-router-dom";


const City = props => (

  <div className='Phone'>
    <NavLink to={'/'}>Back</NavLink>
    <div className="phone__main">
      <div className="phone__img--wrap">
        <div className="phone__img" style={{backgroundImage: `url(${props.city._embedded['ua:images'].photos[0].image.mobile})`}}></div>
      </div>
      <div className="characteristic">
        {Object.keys(props.city).map(key => {
          if(key === '_embedded' || key === '_links' || key === 'bounding_box') return null;
          else return (
            <div key={key} className='characteristic__row'>
              <p>{key}: </p>
              <p>{props.city[key]}</p>
            </div>
          )
        })}
      </div>
      <iframe frameBorder="0" style={{ width: "100%", height: "450"}} name="gMap" src={`https://www.google.com/maps/embed/v1/place?q=${(props.city.bounding_box.latlon.north + props.city.bounding_box.latlon.south) / 2},${(props.city.bounding_box.latlon.east + props.city.bounding_box.latlon.west) / 2}&key=AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk`}></iframe>

    </div>
  </div>
);

export default City