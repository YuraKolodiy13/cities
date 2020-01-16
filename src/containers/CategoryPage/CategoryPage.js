import React, {Component} from 'react'

import {connect} from "react-redux";
// import Loader from "../../../../shop/src/components/Loader/Loader";
// import Categories from "../../../../shop/src/components/Categories/Categories";
import CitiesList from "../../components/CitiesList/CitiesList";
import {fetchCities, fetchCityCategory} from "../../actions";
import Categories from "../../components/Categories/Categories";

class PhonePage extends Component{

  categoryActive = this.props.match.params.name;

  async componentDidMount(){
    this.props.fetchCities();
    this.props.fetchCityCategory(this.props.match.params.name);
  }
  componentDidUpdate(){
    if(this.categoryActive !== this.props.match.params.name){
      this.props.fetchCityCategory(this.props.match.params.name);
      this.categoryActive = this.props.match.params.name;
    }
  }
  render(){
    if(this.props.loading){
      // return <Loader/>
    }
    return(
      <>
        <Categories cities={this.props.cities}/>
        <CitiesList cities={this.props.category}/>
      </>

    )
  }
}

const mapStateToProps = state => {
  return{
    cities: state.city.cities,
    category: state.city.category,
    // loading: state.phone.loading
  }
};

const MapDispatchToProps = {
  fetchCities,
  fetchCityCategory: country => fetchCityCategory(country)
};

export default connect(mapStateToProps, MapDispatchToProps)(PhonePage)