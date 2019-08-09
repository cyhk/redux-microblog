import {
  ADD_POST, EDIT_POST, DELETE_POST,
  ADD_COMMENT, DELETE_COMMENT,
  LOAD_TITLES, LOAD_POST,
  SHOW_SPINNER, SHOW_ERR,
  CLEAR_ERR, CHANGE_VOTE
} from "./actionTypes.js";

import { BASE_URL } from "./config";

import axios from "axios";

function showSpinner() {
  return { type: SHOW_SPINNER }
}

function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

export function clearErr() {
  return { type: CLEAR_ERR };
}

function getTitles(titles) {
  return { type: LOAD_TITLES, titles };
}

function getPost(post) {
  return { type: LOAD_POST, post };
}

function addPost(postDetails) {
  return { type: ADD_POST, postDetails };
}

function editPost(postDetails) {
  return { type: EDIT_POST, postDetails };
}

function deletePost(id) {
  return { type: DELETE_POST, id };
}

function addComment(postId, commentDetails) {
  const { id, text } = commentDetails;
  return { type: ADD_COMMENT, payload: { commentId: id, text, postId } };
}

function deleteComment(postId, commentId) {
  return { type: DELETE_COMMENT, postId, commentId };
}

function makeVote(id, votes) {
  return { type: CHANGE_VOTE, id, votes };
}

// function wrapWithSpinner(fn){
//   dispatch(showSpinner());
//   return function(){
//     return fn()
//   }
// }

export function getTitlesFromAPI() {
  return async function (dispatch) {
    dispatch(showSpinner());
    try {
      let res = await axios.get(`${BASE_URL}posts`);
      dispatch(getTitles(res.data));
    } catch (err) {
      dispatch(showErr(err.message));
    }
  }
}
export function getPostFromAPI(id) {
  return async function (dispatch) {
    dispatch(showSpinner());
    
    try {
      let res = await axios.get(`${BASE_URL}posts/${id}`);

      dispatch(getPost(res.data));
    } catch (err) {
      dispatch(showErr(err.message));
    }
  }
}

// return action with type ADD_OR_EDIT_POST
export function addPostFromAPI(postDetails) {
  return async function (dispatch) {
    dispatch(showSpinner());
    
    try {
      let res = await axios.post(`${BASE_URL}posts/`, postDetails);

      dispatch(addPost(res.data));
    } catch (err) {
      dispatch(showErr(err.message));
    }
  }
}

export function editPostFromAPI(id, postDetails) {
  return async function (dispatch) {
    dispatch(showSpinner());
    
    try {
      let res = await axios.put(`${BASE_URL}posts/${id}`, postDetails);
      dispatch(editPost(res.data));
    } catch (err) {
      dispatch(showErr(err.message));
    }
  }
}

// return action with type DELETE_POST
export function deletePostFromAPI(id) {
  return async function (dispatch) {
    dispatch(showSpinner());
    
    try {
      await axios.delete(`${BASE_URL}posts/${id}`);
      dispatch(deletePost(id));
    } catch (err) {
      dispatch(showErr(err.message));
    }
  }
}

// return action with type ADD_COMMENT
export function addCommentFromAPI(postId, comment) {
  return async function (dispatch) {
    try {
      let res = await axios.post(`${BASE_URL}posts/${postId}/comments`, { text: comment });
      dispatch(addComment(postId, res.data))
    } catch (err) {
      dispatch(showErr(err.message));
    }
  }
}

// return action with type DELETE_COMMENT
export function deleteCommentFromAPI(postId, commentId) {
  return async function (dispatch) {
    try {
      await axios.delete(`${BASE_URL}posts/${postId}/comments/${commentId}`);
      dispatch(deleteComment(postId, commentId));
    } catch (err) {
      dispatch(showErr(err.message));
    }
  }
}

export function makeVoteFromAPI(id, vote) {
  return async function (dispatch) {
    try {
      let res = await axios.post(`${BASE_URL}posts/${id}/vote/${vote}`);
      
      dispatch(makeVote(id, res.data.votes));
    } catch (err) {
      dispatch(showErr(err.message));
    }
  }
}