import React, {useState} from 'react'
import './City.scss'
import {NavLink} from "react-router-dom";
import {GOOGLE_API_URL, GOOGLE_KEY} from "../../api";



const City = props => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['General', 'Photos', 'Map'];
  return (
    <div className='Phone'>
      <NavLink to={'/'}>Back</NavLink>
      <div className="phone__main">
        <ul className="tabs">
          {tabs.map((item, index) =>
            <li
              key={item}
              className={`${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {item}
            </li>
          )}
        </ul>
        {activeTab === 0 && (
          <>
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
          </>
        )}
        {activeTab === 1 && (
          <div className="grid-gallery">
            {props.cityAddInfo.photos && props.cityAddInfo.photos.map(item => (
              <div key={item.photo_reference} className="destination" style={{backgroundImage: `url(${GOOGLE_API_URL}/place/photo?maxwidth=${item.width}&photoreference=${item.photo_reference}&key=${GOOGLE_KEY})` }}/>
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <iframe frameBorder="0" style={{ width: "100%", height: "450px"}} name="gMap" src={`https://www.google.com/maps/embed/v1/place?q=${props.cityAddInfo.geometry.location.lat},${props.cityAddInfo.geometry.location.lng}&key=AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk`}/>
        )}
      </div>
    </div>
  )
};

export default City