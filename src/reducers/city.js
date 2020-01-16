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
} from "../actions/actionType";

const initialState = {
  cities: [],
  city: {},
  category: [],
  loading: true
};

const city = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        loading: false
      };
    case FETCH_CITIES_ERROR:
      return {
        ...state,
        error: action.error,
        loading: true
      };

    case FETCH_CITY_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        city: action.payload,
        loading: false
      };
    case FETCH_CITY_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case FETCH_CITY_CATEGOTY_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_CITY_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        loading: false
      };
    case FETCH_CITY_CATEGORY_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state
  }
}

export default city;