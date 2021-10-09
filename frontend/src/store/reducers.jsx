import {  GET_BYDATA, GET_ALL } from "./actions/actionTypes";

const initialState = {
    getByData: [],
    getAll: []
  };

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_BYDATA :
      return {
        ...state,
        getByData: action.payload
      }
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