/* eslint-disable prettier/prettier */

import {MainMenuUrl} from '../../utilities/urls';
import {makeRequest} from '../../utilities/api';

export const GET_TOP_MENU_DATA_SUCCESS = 'GET_TOP_MENU_DATA_SUCCESS';
export const GET_TOP_MENU_DATA_ERROR = 'GET_TOP_MENU_DATA_ERROR';
export const GET_TOP_MENU_DATA = 'GET_TOP_MENU_DATA';

const getTopMenuDataAction = () => {
  return async dispatch => {
    try {
      dispatch({
        type: GET_TOP_MENU_DATA,
      });
      const result = await makeRequest(MainMenuUrl, {method: 'GET'});
      if (result.length > 0) {
        dispatch({
          type: GET_TOP_MENU_DATA_SUCCESS,
          payload: result,
        });
      } else {
        dispatch({
          type: GET_TOP_MENU_DATA_ERROR,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_TOP_MENU_DATA_ERROR,
      });
    }
  };
};
export default getTopMenuDataAction;
