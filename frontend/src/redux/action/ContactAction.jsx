import axios from 'axios';
import { CONTACT_FAIL, CONTACT_REQUEST, CONTACT_SUCCESS } from '../constrain/ContactConstrain';

//get data for contact
export const getContacts = () => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_REQUEST });
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}contacts`);
    dispatch({
      type: CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_FAIL,
      payload: error.message,
    });
  }
};
