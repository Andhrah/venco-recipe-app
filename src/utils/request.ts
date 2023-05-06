import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

// Config.API_KEY;
const appKey = Config.APP_KEY;
const appId = Config.APP_ID;
const url = Config.BASE_URL;

console.log('=================');
console.log(url);

type RequestProps = {
  route: string;
  method: string;
  payload: object;
  params: object;
}


/**
 * Helper function that configures axios requests
 * @param {object} config The configuration data.
 * route - The route to make request to. e.g profiles, search?q=term&size=5
 * method - The HTTP method to use. e.g post, get, patch,
 * payload - The request body payload
 * token - The authorization token to use if any
 * @returns {Promise} The axios promise
 */
const request = async (
  {
    route,
    method,
    payload,
    params,
  }: RequestProps
) => {
  method = method || 'get';
  const headers = {
    Accept: 'application/json',
    app_key: appKey,
    app_id: appId,
    'Content-Type': 'application/json',
    type: 'public',
  };
  return axios({
    data: payload,
    // url: `https://joinmomentum.app/dashboard/api/v1/${route}`,
    url: `${url}/${route}`,
    method,
    headers,
    params,
  });
};

export default request;
