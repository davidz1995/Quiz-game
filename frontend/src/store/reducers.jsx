import {  GET_ALL } from "./actions/actionTypes";

const initialState = {
    getAll: []
  };

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_ALL :
        return {
          ...state,
          getAll: action.payload
        }
      default:
        return {
          ...state
        }
      }
  }

export default reducer 