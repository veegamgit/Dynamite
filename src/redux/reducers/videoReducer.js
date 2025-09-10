/* eslint-disable prettier/prettier */

import {
  GET_VIDEOS,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR,
  LOAD_MORE_VIDEOS_SUCCESS,
  LOADMORE_VIDEOS,
} from '../actions/getVideoAction';

const initialState = {
  videosData: {
    data: [],
  },
  videosLoading: false,
  videosLoadingMore: false,
  error: false,
  hasMore: true,
};

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videosLoading: true,
        error: false,
      };
    case GET_VIDEOS_SUCCESS:
      return {
        ...state,
        videosData: {
          ...state.videosData,
          data: action.payload.data || [],
        },
        videosLoading: false,
        hasMore: action.payload.data && action.payload.data.length === 20,
      };
    case LOADMORE_VIDEOS:
      return {
        ...state,
        videosLoadingMore: true,
        error: false,
      };
    case LOAD_MORE_VIDEOS_SUCCESS:
      return {
        ...state,
        videosData: {
          ...state.videosData,
          data: [
            ...(state.videosData.data || []),
            ...(action.payload.data || []),
          ],
        },
        videosLoadingMore: false,
        hasMore: action.payload.data && action.payload.data.length === 10,
      };
    case GET_VIDEOS_ERROR:
      return {
        ...state,
        videosLoading: false,
        error: true,
      };
    default:
      return state;
  }
}

export default videoReducer;
