import {
  LOAD_POST, ADD_POST,
  EDIT_POST, DELETE_POST,
} from "./actionTypes.js";

const INITIAL_STATE = {
  posts: { },
  titles: [],
  err: false
};

/**
 * postReducer: 
 * add, edit, or delete post;
 * add or delete comment
 */

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_POST: {
      const { id, title, description, body, votes, comments } = action.post;
      return {
        ...state,
        posts : {
          ...state.posts,
          [id]: {
            title,
            description,
            body,
            votes,
            comments
          }
        }
      }
    }
    case ADD_POST: {
      const { id, title, description, body, votes } = action.postDetails;

      const post = {
        title,
        description,
        body,
        comments: [],
        votes
      }

      return {
        ...state,
        posts: {
          ...state.posts,
          [id]: post
        }
      }
    }
    case EDIT_POST: {
      const { id, title, description, body, votes } = action.postDetails;

      return {
        ...state,
        posts: {
          ...state.posts,
          [id]: {
            ...state.posts[id],
            title,
            description,
            body,
            votes
          },
        }
      }
    }
    case DELETE_POST: {
      const newPosts = { ...state.posts };
      delete newPosts[action.id];

      return {
        ...state,
        posts: newPosts
      }
    }
    default:
      return state;
  }
}

export default postReducer;