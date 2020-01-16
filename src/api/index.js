export const fetchCitiesApi = async () => {
  let response = await fetch('https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:images');
  if (!response.ok) {
    alert("HTTP-Error: " + response.status);
  }
  let res = await response.json();
  return res._embedded['ua:item'];
};