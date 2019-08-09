import {
  LOAD_TITLES,
  EDIT_POST,
  ADD_POST,
  DELETE_POST,
} from "../actionTypes.js";

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
      return loadTitles(state, action);
    }
    case ADD_POST: {
      return addPost(state, action.postDetails);
    }
    case EDIT_POST: {
      return editPost(state, action.postDetails);
    }
    case DELETE_POST: {
      return deletePost(state, action);
    }
    default:
      return state;
  }
}


// helper function(s)
function loadTitles(state, { titles }) {
  return {
    ...state,
    titles,
    loading: false
  };
}

function addPost(state, { id, title, description, votes }) {
  return {
    ...state,
    titles: [...state.titles, { id, title, description, votes }],
    loading: false
  };
}

function editPost(state, { id, title, description, votes }) {
  return {
    ...state,
    titles:
      state.titles.map(t =>
        t.id !== id ?
          t :
          { id, title, description, votes }
      ),
    loading: false
  };
}

function deletePost(state, { id }) {
  return {
    ...state,
    titles: state.titles.filter(
      t => t.id !== +id
    ),
    loading: false
  };
}


export default titleReducer;