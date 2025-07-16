/* eslint-disable prettier/prettier */
import {
    GET_NATIONAL,
    GET_NATIONAL_SUCCESS,
    GET_NATIONAL_ERROR,
  } from '../actions/getNationalAction';

  const initialState = {
    nationalData: [],
    nationalLoading: false,
  };

  function nationalReducer(state = initialState, action) {
    switch (action.type) {
      case GET_NATIONAL:
        return { ...state, nationalLoading: true };
      case GET_NATIONAL_SUCCESS:
        return { ...state, nationalData: action.payload, nationalLoading: false };
      case GET_NATIONAL_ERROR:
        return { ...state, nationalLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (nationalReducer);

