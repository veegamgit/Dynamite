/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Elections, } from '../../utilities/urls';

export const GET_ELECTIONS_SUCCESS = 'GET_ELECTIONS_SUCCESS';
export const GET_ELECTIONS_ERROR = 'GET_ELECTIONS_ERROR';
export const GET_ELECTIONS = 'GET_ELECTIONS';

 const getElectionsAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_ELECTIONS,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Elections, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_ELECTIONS_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_ELECTIONS_ERROR,
          });
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getElectionsAction;
