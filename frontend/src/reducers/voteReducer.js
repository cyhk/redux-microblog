import { 
  CHANGE_VOTE
 } from "../actionTypes.js";

const INITIAL_STATE = {
  posts: { },
  titles: [],
  loading: true,
  err: ''
};

/**
 * voteReducer: 
 * manage votes
 */

function voteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_VOTE: {
      return changeVote(state, action);
    }
    default:
      return state;
  }
}

// helper function(s)
function changeVote(state, { id, votes }) {      
  return {
    ...state,
    titles: state.titles.map(
      t => t.id === +id ? { ...t, votes} : t
    ),
    posts: {
      ...state.posts,
      [id]: 
      state.posts[id] && {
        ...state.posts[id],
        votes
      }
    }
  }
}

export default voteReducer;