import { GET_BYDATA, GET_ALL} from "./actionTypes";
import axios from "axios";
import { QUIZ_URL } from '../../constants'

export const getByData = (data) => {
  return async (dispatch) => {
    if (data) {
      const response = await axios.get(QUIZ_URL + data)
      let error = [{data: 'Not found'}]
      //console.log(response)
      if(response.status === 200) dispatch({type: GET_BYDATA, payload: response.data})
      if(response.status === 404) dispatch({type: GET_BYDATA, payload: error})
    } 
  }
}

export const getAll = () => {
  return async (dispatch) => {
      const response = await axios.get(QUIZ_URL)
          dispatch({ type:GET_ALL, payload: response.data})
    }
  }





