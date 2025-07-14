/* eslint-disable prettier/prettier */

import {BaseUrl, WebstoriesUrl} from '../../utilities/urls';

export const GET_WEBSTORIES_SUCCESS = 'GET_WEBSTORIES_SUCCESS';
export const GET_WEBSTORIES_ERROR = 'GET_WEBSTORIES_ERROR';
export const GET_WEBSTORIES = 'GET_WEBSTORIES';

const getWebstoriesAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_WEBSTORIES,
      });
      const result = await fetch(BaseUrl + WebstoriesUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_WEBSTORIES_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_WEBSTORIES_ERROR,
        });
      }
    };
  } catch (error) {
    dispatch({
      type: GET_WEBSTORIES_ERROR,
      payload: error,
    });
  }
};
export default getWebstoriesAction;
