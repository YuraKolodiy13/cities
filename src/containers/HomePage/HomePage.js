import React, {Component} from 'react';
import './HomePage.scss';
import {fetchCities} from "../../actions/index";
import {connect} from "react-redux";

import Loader from "../../components/Loader/Loader";
import CitiesList from "../../components/CitiesList/CitiesList";
import Categories from "../../components/Categories/Categories";

class HomePage extends Component{



  componentDidMount(){
    this.props.fetchCities();

  }

  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return (
      <div>
        <Categories cities={this.props.cities}/>
        <CitiesList cities={this.props.cities}/>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return{
    cities: state.city.cities,
    loading: state.city.loading
  }
};


const MapDispatchToProps = {
  fetchCities
};

export default connect(mapStateToProps, MapDispatchToProps)(HomePage)