/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Travel} from '../../utilities/urls';

export const GET_TRAVEL_SUCCESS = 'GET_TRAVEL_SUCCESS';
export const GET_TRAVEL_ERROR = 'GET_TRAVEL_ERROR';
export const GET_TRAVEL = 'GET_TRAVEL';

 const getTravelAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_TRAVEL,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Travel, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_TRAVEL_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_TRAVEL_ERROR,
          });
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getTravelAction;
