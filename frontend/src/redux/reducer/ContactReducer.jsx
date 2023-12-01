import { CONTACT_FAIL, CONTACT_REQUEST, CONTACT_SUCCESS } from "../constrain/ContactConstrain";

//First making initial state
const initialState = {
  loading: false,
  contacts: [],
  error: null,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
        error: null,
      };
    case CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
