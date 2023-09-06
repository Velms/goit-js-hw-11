import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_nRAbKPGtPy5olGmKf9By3ctpIFYQykaC9MBEH2OF27WPgKQQ6HPlYeHfglM34rrO";

const BASE_URL = "https://api.thecatapi.com/v1";
const END_POINT = "/breeds";
const END_POINT_CAT = "/images/search";

function fetchBreeds() {
    return axios.get(`${BASE_URL}${END_POINT}`)
    .then(
    (response) => {
      return response.data;
        }
    )
        .catch(err => {console.log(err); }) 
}

function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}${END_POINT_CAT}?breed_ids=${breedId}`)
    .then(
        (response) => {
      return response.data[0];
        }
    )
        .catch(err => {console.log(err); }) 
}

export { fetchBreeds, fetchCatByBreed };