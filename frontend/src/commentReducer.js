import {
  ADD_COMMENT, DELETE_COMMENT
} from "./actionTypes.js";

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
      const { postId, commentId, text } = action.payload;
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
    case DELETE_COMMENT: {
      const { postId, commentId } = action;
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
    default:
      return state;
  }
}

export default commentReducer;