/* eslint-disable prettier/prettier */

import {
    GET_ELECTIONS,
    GET_ELECTIONS_SUCCESS,
    GET_ELECTIONS_ERROR,
  } from '../actions/getElectionsAction';

  const initialState = {
    electionData: [],
    electionLoading: false,
    error: false,
  };

  function electionsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ELECTIONS:
        return {...state, electionLoading: true};
      case GET_ELECTIONS_SUCCESS:
        return {...state, electionData: action.payload, electionLoading: false};
              case GET_ELECTIONS_ERROR:
  return {...state, electionLoading: true, error: true};
      default:
        return state;
    }
  }

  export default electionsReducer;
