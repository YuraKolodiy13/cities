import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchCity} from "../../actions";
import City from "../../components/City/City";
import Loader from "../../components/Loader/Loader";

class CityPage extends Component{

  async componentDidMount(){
    this.props.fetchCity(this.props.match.params.name);
  }
  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <div className='col-md-12'>
        {
          Object.entries(this.props.city).length !== 0 ?
            <City city={this.props.city} />
            : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    city: state.city.city,
    loading: state.city.loading
  }
};

const MapDispatchToProps = {
  fetchCity: name => fetchCity(name)
};

export default connect(mapStateToProps, MapDispatchToProps)(CityPage)