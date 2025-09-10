/* eslint-disable prettier/prettier */

import {BaseUrl, CategoryUrl, Videos} from '../../utilities/urls';

export const GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS';
export const GET_VIDEOS_ERROR = 'GET_VIDEOS_ERROR';
export const GET_VIDEOS = 'GET_VIDEOS';
export const LOADMORE_VIDEOS = 'LOADMORE_VIDEOS';
export const LOAD_MORE_VIDEOS_SUCCESS = 'LOAD_MORE_VIDEOS_SUCCESS';

const getVideoAction = (isLoadMore = false, offset = 0) => {
  console.log('getVideoAction called with offset:', isLoadMore, offset);
  return async dispatch => {
    try {
      if (!isLoadMore) {
        dispatch({
          type: GET_VIDEOS,
        });
      } else {
        dispatch({
          type: LOADMORE_VIDEOS,
        });
      }

      // Initial load shows 20 records, load more shows 10 records
      const limit = isLoadMore ? 10 : 20;

      const result = await fetch(
        `${BaseUrl}${CategoryUrl}?category=${Videos}&limit=${limit}&offset=${offset}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const json = await result.json();

      if (json) {
        dispatch({
          type: isLoadMore ? LOAD_MORE_VIDEOS_SUCCESS : GET_VIDEOS_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_VIDEOS_ERROR,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_VIDEOS_ERROR,
      });
    }
  };
};
export default getVideoAction;
