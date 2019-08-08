import {
  LOAD_TITLES,
  EDIT_POST,
  ADD_POST,
  DELETE_POST
} from "./actionTypes.js";

const INITIAL_STATE = {
  posts: {},
  titles: [],
  err: false
};

/**
 * titleReducer: 
 * update, add or delete state.titles
 */

function titleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_TITLES: {
      return {
        ...state,
        titles: action.titles
      }
    }
    case EDIT_POST: {
      const { id, title, description } = action.postDetails;
      return {
        ...state,
        titles:
          state.titles.map(t =>
            t.id !== id ?
              t :
              { id, title, description }
          )
      }
    }
    case ADD_POST: {
      const { id, title, description } = action.postDetails;
      return {
        ...state,
        titles: [...state.titles, { id, title, description }]
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        titles: state.titles.filter(
          t => t.id !== +action.id
        )
      }
    }
    default:
      return state;
  }
}

export default titleReducer;