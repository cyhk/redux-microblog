import {
  ADD_POST, EDIT_POST, DELETE_POST,
  ADD_COMMENT, DELETE_COMMENT,
  LOAD_TITLES, LOAD_POST,
  SHOW_SPINNER, SHOW_ERR,
  CHANGE_VOTE
} from "./actionTypes";

export function showSpinner() {
  return { type: SHOW_SPINNER }
}

export function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

export function getTitles(titles) {
  return { type: LOAD_TITLES, titles };
}

export function getPost(post) {
  return { type: LOAD_POST, post };
}

export function addPost(postDetails) {
  return { type: ADD_POST, postDetails };
}

export function editPost(postDetails) {
  return { type: EDIT_POST, postDetails };
}

export function deletePost(id) {
  return { type: DELETE_POST, id };
}

export function addComment(postId, commentDetails) {
  const { id, text } = commentDetails;
  return { type: ADD_COMMENT, payload: { commentId: id, text, postId } };
}

export function deleteComment(postId, commentId) {
  return { type: DELETE_COMMENT, postId, commentId };
}

export function makeVote(id, votes) {
  return { type: CHANGE_VOTE, id, votes };
}

