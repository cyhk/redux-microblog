import {
  ADD_OR_EDIT_POST, DELETE_POST,
} from "./actionTypes.js";

const INITIAL_STATE = {
  posts: { byId: {}, allIds: [] },
  comments: { byId: {}, allIds: [] }
};

/**
 * postReducer: 
 * add, edit, or delete post;
 * add or delete comment
 */

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_OR_EDIT_POST: {
      const { id, title, description, body, } = action.payload;

      const post = {
        title,
        description,
        body,
        comments: state.posts.byId[id] ? [...state.posts.byId[id].comments] : []
      }

      const newPostAllIds = [...state.posts.allIds];
      if (!newPostAllIds.includes(id)) {
        newPostAllIds.push(id);
      }

      return {
        ...state,
        posts: {
          ...state.posts,
          byId: {
            ...state.posts.byId,
            [id]: post
          },
          allIds: newPostAllIds
        }
      }
    }
    case DELETE_POST: {
      const { id } = action.payload;
      const postComments = state.posts.byId[id].comments;
      const newComments = { ...state.comments.byId };
      // remove comments from comments byId object
      postComments.forEach(commentId => delete newComments[commentId]);
      // remove commentIds from comments allIds array
      const newCommentAllIds = state.comments.allIds.filter(commentId => newComments[commentId] !== undefined);

      // take out post from byId and postId from allIds
      const newPosts = { ...state.posts.byId };
      const newPostAllIds = state.posts.allIds.filter(postId => postId !== id);

      delete (newPosts[id]);

      return {
        ...state,
        posts: {
          byId: newPosts,
          allIds: newPostAllIds
        },
        comments: {
          byId: newComments,
          allIds: newCommentAllIds
        }
      }
    }
    default:
      return state;
  }
}

export default postReducer;