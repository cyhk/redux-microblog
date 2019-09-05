import {
  ADD_COMMENT, DELETE_COMMENT
} from "../actionTypes.js";

const INITIAL_STATE = {
  posts: {},
  titles: [],
  loading: true,
  err: false
};

/**
 * commentReducer: 
 * add, edit, or delete post;
 * add or delete comment
 */
function commentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COMMENT: {
      return addComment(state, action.payload);
    }
    case DELETE_COMMENT: {
      return deleteComment(state, action);
    }
    default:
      return state;
  }
}

// helper function(s)
function addComment(state, { postId, commentId, text }) {
  return {
    ...state,
    posts: {
      ...state.posts,
      [postId]: {
        ...state.posts[postId],
        comments: [
          ...state.posts[postId].comments,
          {
            id: commentId,
            text
          }
        ]
      }
    }
  }
}

function deleteComment(state, { postId, commentId }) {
  return {
    ...state,
    posts: {
      ...state.posts,
      [postId]: {
        ...state.posts[postId],
        comments: state.posts[postId].comments.filter(
          c => c.id !== commentId
        )
      }
    },
  }
}


export default commentReducer;