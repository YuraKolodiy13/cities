import {
  FETCH_CITIES_ERROR,
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCESS,
  FETCH_CITY_CATEGORY_ERROR,
  FETCH_CITY_CATEGORY_SUCCESS,
  FETCH_CITY_CATEGOTY_START,
  FETCH_CITY_ERROR,
  FETCH_CITY_START,
  FETCH_CITY_SUCCESS
} from "./actionType";
import {fetchCitiesApi} from "../api";

export const fetchCities = () => async dispatch => {
  dispatch({
    type: FETCH_CITIES_START
  });

  try {
    console.log(43, 333)
    const cities = await fetchCitiesApi();
    dispatch({
      type: FETCH_CITIES_SUCCESS,
      payload: cities
    })

  }catch (e) {
    dispatch({
      type: FETCH_CITIES_ERROR,
      payload: e,
      error: true
    });
  }
};

export const fetchCity = cityName => {
  return async dispatch => {
    dispatch({
      type: FETCH_CITY_START
    });

    try {
      let city = await fetchCitiesApi();
      city = city.find(item => item.name === cityName);
      dispatch({
        type: FETCH_CITY_SUCCESS,
        payload: city
      })

    }catch (e) {
      dispatch({
        type: FETCH_CITY_ERROR,
        payload: e,
        error: true
      });
    }
  }
};

export const fetchCityCategory = country => {
  return async dispatch => {
    dispatch({
      type: FETCH_CITY_CATEGOTY_START
    });

    try {
      let city = await fetchCitiesApi();
      country = country[0].toUpperCase() + country.slice(1);
      city = city.filter(item => item.full_name.split(', ')[1] === country, 645645);
      console.log(city, 543)
      dispatch({
        type: FETCH_CITY_CATEGORY_SUCCESS,
        payload: city
      })

    }catch (e) {
      dispatch({
        type: FETCH_CITY_CATEGORY_ERROR,
        payload: e,
        error: true
      });
    }
  }
};