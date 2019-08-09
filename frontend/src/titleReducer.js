import {
  LOAD_TITLES,
  EDIT_POST,
  ADD_POST,
  DELETE_POST,
  // CHANGE_VOTE_ON_TITLE
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
      return {
        ...state,
        titles: action.titles,
        loading: false
      }
    }
    case ADD_POST: {
      const { id, title, description, votes } = action.postDetails;
      return {
        ...state,
        titles: [...state.titles, { id, title, description, votes }],
        loading: false
      }
    }
    case EDIT_POST: {
      const { id, title, description, votes } = action.postDetails;
      return {
        ...state,
        titles:
          state.titles.map(t =>
            t.id !== id ?
              t :
              { id, title, description, votes }
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
    // case CHANGE_VOTE_ON_TITLE: {
    //   const { id, votes } = action;
    //   return {
    //     ...state,
    //     titles: state.titles.map(
    //       t => {
    //         return t.id === +id ? { ...t, votes} : t
    //       }
    //     )
    //   }
    // }
    default:
      return state;
  }
  
}

export default titleReducer;