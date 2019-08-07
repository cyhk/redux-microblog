import {
  ADD_OR_EDIT_POST, DELETE_POST,
  ADD_COMMENT, DELETE_COMMENT
} from "./actionTypes.js";

const INITIAL_STATE = { posts: {}, comments: {} };

/**
 * microblogReducer: 
 * add, edit, or delete post, and
 * add or delete comment
 */
function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_OR_EDIT_POST: {
      const { id, title, description, body } = action.payload;
      const newComments = state.comments[id] ?
        [...state.comments[id]] :
        [];
      return {
        ...state,
        posts: {
          ...state.posts,
          [id]: {
            title,
            description,
            body
          }
        },
        comments: {
          ...state.comments,
          [id]: newComments
        }
      }
    }
    case DELETE_POST: {
      const { id } = action.payload;
      const newPosts = { ...state.posts };
      const newComments = { ...state.comments };
      delete (newPosts[id]);
      delete (newComments[id]);
      return {
        ...state,
        posts: newPosts,
        comments: newComments
      }
    }
    case ADD_COMMENT: {
      const { id, comment } = action.payload;
      let newComments = [...state.comments[id], comment]

      return {
        ...state,
        comments: {
          ...state.comments,
          [id]: newComments
        }
      }
    }
    case DELETE_COMMENT: {
      const { id, index } = action.payload;
      const newComments = state.comments[id].filter(
        (comment, cIndex) => cIndex !== index
      );

      return {
        ...state,
        comments: {
          ...state.comments,
          [id]: newComments
        }
      }
    }
    default:
      return state;
  }
}

export default shopReducer;