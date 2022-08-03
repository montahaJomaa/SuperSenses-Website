import axios from 'axios'

import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_DETAIL_REQUEST,
    USER_DETAIL_FAIL,
    USER_DETAIL_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST,
} from '..constants/useronstants'



const registerUser = (form) => async (dispatch) => { 
    try {
      dispatch({ type: USER_REGISTER_REQUEST })
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const {data} = await axios.post('/api/users/register',form,config)
     
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
      })
    
    
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
      
   }

}
export default registerUser;
