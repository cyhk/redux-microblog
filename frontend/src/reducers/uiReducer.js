import { 
  SHOW_SPINNER,
  SHOW_ERR,
  CLEAR_ERR
} from "../actionTypes.js";

const INITIAL_STATE = {
  posts: { },
  titles: [],
  loading: true,
  err: ''
};

/**
 * uiReducer: 
 * manage error display
 */

function uiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        loading: true
      }
    }
    case SHOW_ERR: {
      return {
        ...state,
        err: action.msg
      }
    }
    case CLEAR_ERR: {
      return {
        ...state,
        err: ''
      }
    }
    default:
      return state;
  }
}

export default uiReducer;