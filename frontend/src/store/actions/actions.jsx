import { GET_ALL } from "./actionTypes";
import axios from "axios";
import { QUIZ_URL } from '../../constants'

export const getAll = () => {
  return async (dispatch) => {
      const response = await axios.get(QUIZ_URL)
          dispatch({ type:GET_ALL, payload: response.data})
    }
  }





