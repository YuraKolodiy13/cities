export const GOOGLE_KEY = 'AIzaSyDByhBwcAy1pRhQuJUNL_DyAcl6YFUFocw';
export const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api';
const CORS_URL = 'https://cors.bridged.cc';

export const fetchCitiesApi = async () => {
  let response = await fetch('https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:images');
  if (!response.ok) {
    alert("HTTP-Error: " + response.status);
  }
  let res = await response.json();
  return res._embedded['ua:item'];
};

export const fetchCitiesPhotosApi = async (query) => {
  let response = await fetch(`${CORS_URL}/${GOOGLE_API_URL}/place/textsearch/json?query=${query}&key=${GOOGLE_KEY}`);
  if (!response.ok) {
    alert("HTTP-Error: " + response.status);
  }
  let res = await response.json();
  let response2 = await fetch(`${CORS_URL}/${GOOGLE_API_URL}/place/details/json?place_id=${res.results[0].place_id}&key=${GOOGLE_KEY}`);
  if (!response2.ok) {
    alert("HTTP-Error: " + response2.status);
  }
  let res2 = await response2.json();
  return res2.result;
};
