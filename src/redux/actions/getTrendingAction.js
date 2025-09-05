import {makeRequest} from '../../utilities/api';
import {BaseUrl, trendingUrl} from '../../utilities/urls';

export const GET_TRENDING_LOADING = 'GET_TRENDING_LOADING';
export const GET_TRENDING_SUCCESS = 'GET_TRENDING_SUCCESS';
export const GET_TRENDING_ERROR = 'GET_TRENDING_ERROR';

const getTrendingAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_TRENDING_LOADING,
      });
      const result = await makeRequest(trendingUrl, {
        method: 'GET',
      });
      if (result.menu_items.length > 0) {
        dispatch({
          type: GET_TRENDING_SUCCESS,
          payload: result,
        });
      } else {
        dispatch({
          type: GET_TRENDING_ERROR,
        });
      }
    };
  } catch (error) {
    dispatch({
      type: GET_TRENDING_ERROR,
      payload: error,
    });
  }
};
export default getTrendingAction;
