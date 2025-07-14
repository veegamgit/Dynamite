/* eslint-disable prettier/prettier */

import {
    GET_GANESH,
    GET_GANESH_SUCCESS,
    GET_GANESH_ERROR,
  } from '../actions/getGaneshAction';

  const initialState = {
    ganeshData: [],
    ganeshLoading: false,
    error: false,
  };

  function ganeshReducer(state = initialState, action) {
    switch (action.type) {
      case GET_GANESH:
        return {...state, ganeshLoading: true};
      case GET_GANESH_SUCCESS:
        return {...state, ganeshData: action.payload, ganeshLoading: false};
              case GET_GANESH_ERROR:
  return {...state, ganeshLoading: true, error: true};
      default:
        return state;
    }
  }

  export default ganeshReducer;
