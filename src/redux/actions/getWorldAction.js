/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl,  World} from '../../utilities/urls';

export const GET_WORLD = 'GET_WORLD';
export const GET_WORLD_SUCCESS = 'GET_WORLD_SUCCESS';
export const GET_WORLD_ERROR = 'GET_WORLD_ERROR';

export const getWorldAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_WORLD,
      });
      const result = await fetch(BaseUrl + CategoryUrl + World, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_WORLD_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_WORLD_ERROR,
        });
      }
    };
  } catch (error) {
    console.log(error);
  }
};
