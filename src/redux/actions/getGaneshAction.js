/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl,  Ganesh, } from '../../utilities/urls';

export const GET_GANESH_SUCCESS = 'GET_GANESH_SUCCESS';
export const GET_GANESH_ERROR = 'GET_GANESH_ERROR';
export const GET_GANESH = 'GET_GANESH';

 const getGaneshAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_GANESH,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Ganesh, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_GANESH_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_GANESH_ERROR,
          });
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getGaneshAction;
