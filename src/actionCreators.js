import {
  ADD_OR_EDIT_POST, DELETE_POST,
  ADD_COMMENT, DELETE_COMMENT
} from "./actionTypes.js";

// return action with type ADD_OR_EDIT_POST
export function addOrEditPost(postDetails) {
  const { id, title, description, body } = postDetails;
  return { type: ADD_OR_EDIT_POST, payload: { id, title, description, body }};
}

// return action with type DELETE_POST
export function deletePost(id) {
  return { type: DELETE_POST, payload: { id }};
}

// return action with type ADD_COMMENT
export function addComment(id, commentId, comment) {
  return { type: ADD_COMMENT, payload: { id, commentId, comment }};
}

// return action with type DELETE_COMMENT
export function deleteComment(id, commentId) {
  return { type: DELETE_COMMENT, payload: { id, commentId }};
}