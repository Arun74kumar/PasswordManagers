/**
 * Axios API
 * Middleware of api request and response
 * @format
 */

import axios from 'axios';

import * as Config from '@app/configs';
import { getAccessToken } from '@app/helpers';

/**
 * Creating custom instance for config
 * server configurations.
 * baseUrl, timeout, api-token etc.
 */
const httpRequest = axios.create({
  baseURL: `${Config.BASE_URL}`,
  timeout: Config.API_TIMEOUT,
});

/**
 * axios request interceptors for debugging
 * and modify request data
 */

httpRequest.interceptors.request.use(
  async reqConfig => {
    const accessToken = await getAccessToken();
    if (accessToken) reqConfig.headers.Authorization = `Bearer ${accessToken}`;
    return reqConfig;
  },
  error => {
    return Promise.reject(error);
  },
);

/**
 * Customizing axios success and error
 * data to easily handle them in app
 */
httpRequest.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(handleApiError(error));
  },
);

/**
 * Handling error
 * @param {*} error
 * @returns
 */
const handleApiError = error => {};

export { httpRequest };
