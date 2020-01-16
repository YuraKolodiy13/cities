import React from 'react'
import {Switch, Route} from "react-router";
import HomePage from "../HomePage/HomePage";
import CityPage from "../CityPage/CityPage";
import CategoryPage from "../CategoryPage/CategoryPage";

const routes = (
  <Switch>
    <Route path='/' component={HomePage} exact/>
    <Route path="/city/:name" component={CityPage}/>
    <Route path="/category/:name" component={CategoryPage}/>
  </Switch>
);

const Layout = () => (
  <div className='view-container'>
    <div className="container">
      {/*<Header/>*/}
      <div className="row">
        {routes}
      </div>
    </div>
  </div>
);

export default Layout