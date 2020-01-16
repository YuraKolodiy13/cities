import React from 'react'
import './Categories.scss'

import {NavLink} from "react-router-dom";
import Collapse from '@material-ui/core/Collapse';

const Categories = props => {
  const [expanded, setExpanded] = React.useState(false);
  return(
    <div>
      <h3 onClick={() => setExpanded(!expanded)}>Categories</h3>
      <Collapse in={expanded}>
        <ul>
          <li>
            <NavLink to={'/'} exact>All</NavLink>
          </li>
          {props.cities.map((item, key) => {
            if(+item.categoryId === key) return null;
            return(
              <li key={key} >
                <NavLink to={'/category/' + item.full_name.split(', ')[1]}>{item.full_name.split(', ')[1]}</NavLink>
              </li>
            )
          })}
        </ul>
      </Collapse>
    </div>
  )
}

export default Categories;