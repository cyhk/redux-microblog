import { SHOW_ERR } from "./actionTypes.js";

const INITIAL_STATE = {
  posts: { },
  titles: [],
  err: ''
};

/**
 * uiReducer: 
 * manage error display
 */

function uiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_ERR: {
      return {
        ...state,
        err: action.msg
      }
    }
    default:
      return state;
  }
}

export default uiReducer;