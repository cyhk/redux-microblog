import {
  LOAD_TITLES,
  EDIT_POST,
  ADD_POST,
  DELETE_POST
} from "./actionTypes.js";

const INITIAL_STATE = {
  posts: {},
  titles: [],
  loading: true,
  err: false
};

/**
 * titleReducer: 
 * update, add or delete state.titles
 */

function titleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_TITLES: {
      console.log("running load titles");
      return {
        ...state,
        titles: action.titles,
        loading: false
      }
    }
    case ADD_POST: {
      const { id, title, description } = action.postDetails;
      return {
        ...state,
        titles: [...state.titles, { id, title, description }],
        loading: false
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
          ),
        loading: false
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        titles: state.titles.filter(
          t => t.id !== +action.id
        ),
        loading: false
      }
    }
    default:
      return state;
  }
}

export default titleReducer;