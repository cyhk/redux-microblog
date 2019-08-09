import {
  LOAD_POST, ADD_POST,
  EDIT_POST, DELETE_POST,
} from "../actionTypes.js";

const INITIAL_STATE = {
  posts: { },
  titles: [],
  loading: true,
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
      return loadPost(state, action.post);
    }
    case ADD_POST: {
      return addPost(state, action.postDetails);
    }
    case EDIT_POST: {
      return editPost(state, action.postDetails);
    }
    case DELETE_POST: {
      return deletePost(state, action.id);
    }
    default:
      return state;
  }
}

 // helper function(s)
function loadPost(state, { id, title, description, body, votes, comments }) {
  return {
    ...state,
    posts: {
      ...state.posts,
      [id]: {
        title,
        description,
        body,
        votes,
        comments
      }
    },
    loading: false
  }
}

function addPost(state, { id, title, description, body, votes }) {
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
    },
    loading: false
  }
}

function editPost(state, { id, title, description, body, votes }) {
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
    },
    loading: false
  }
}

function deletePost(state, id) {
  const newPosts = { ...state.posts };
  delete newPosts[id];

  return {
    ...state,
    posts: newPosts,
    loading: false
  }
}

export default postReducer;