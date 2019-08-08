import {
  ADD_OR_EDIT_POST, DELETE_POST,
  ADD_COMMENT, DELETE_COMMENT
} from "./actionTypes.js";

const INITIAL_STATE = {
  posts: { byId: {}, allIds: [] },
  comments: { byId: {}, allIds: [] }
};

/**
 * microblogReducer: 
 * add, edit, or delete post;
 * add or delete comment
 */
function microblogReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_OR_EDIT_POST: {
      const { id, title, description, body, } = action.payload;

      const post = {
        title,
        description,
        body,
        comments: state.posts.byId[id]? [ ...state.posts.byId[id].comments ] : []
      }

      const newPostAllIds = [ ...state.posts.allIds];
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
    case ADD_COMMENT: {
      const { id, commentId, comment } = action.payload;
      let newPostComments = [...state.posts.byId[id].comments, commentId];
      let newCommentsById = { ...state.comments.byId, [commentId]: comment };
      let newCommentAllIds = [...state.comments.allIds, commentId];
      console.log(newCommentsById);
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

export default microblogReducer;