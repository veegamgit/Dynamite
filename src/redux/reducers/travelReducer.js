/* eslint-disable prettier/prettier */

import {
    GET_TRAVEL,
    GET_TRAVEL_SUCCESS,
    GET_TRAVEL_ERROR,
  } from '../actions/getTravelAction';

  const initialState = {
    travelData: [],
    travelLoading: false,
    error: false,
  };

  function travelReducer(state = initialState, action) {
    switch (action.type) {
      case GET_TRAVEL:
        return {...state, travelLoading: true};
      case GET_TRAVEL_SUCCESS:
        return {...state, travelData: action.payload, travelLoading: false};
              case GET_TRAVEL_ERROR:
  return {...state, travelLoading: false, error: true};
      default:
        return state;
    }
  }

  export default travelReducer;
