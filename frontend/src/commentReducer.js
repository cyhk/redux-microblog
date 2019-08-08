import {
  ADD_COMMENT, DELETE_COMMENT
} from "./actionTypes.js";

const INITIAL_STATE = {
  posts: { byId: {}, allIds: [] },
  comments: { byId: {}, allIds: [] }
};

/**
 * commentReducer: 
 * add, edit, or delete post;
 * add or delete comment
 */

function commentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COMMENT: {
      const { id, commentId, comment } = action.payload;
      let newPostComments = [...state.posts.byId[id].comments, commentId];
      let newCommentsById = { ...state.comments.byId, [commentId]: comment };
      let newCommentAllIds = [...state.comments.allIds, commentId];

      return {
        ...state,
        posts: {
          ...state.posts,
          byId: {
            ...state.posts.byId,
            [id]: {
              ...state.posts.byId[id],
              comments: newPostComments
            }
          }
        },
        comments: {
          ...state.comments,
          byId: newCommentsById,
          allIds: newCommentAllIds
        }
      }
    }
    case DELETE_COMMENT: {
      const { id, commentId } = action.payload;

      let newPostComments = state.posts.byId[id].comments.filter(cId => cId !== commentId);
      let newCommentsById = { ...state.comments.byId };
      delete(newCommentsById[commentId]);
      let newCommentsAllIds = state.comments.allIds.filter(cId => cId !== commentId);

      return {
        ...state,
        posts: {
          ...state.posts,
          byId: {
            ...state.posts.byId,
            [id]: {
              ...state.posts.byId[id],
              comments: newPostComments
            }
          }
        },
        comments: {
          ...state.comments,
          byId: newCommentsById,
          allIds: newCommentsAllIds
        }
      }
    }
    default:
      return state;
  }
}

export default commentReducer;