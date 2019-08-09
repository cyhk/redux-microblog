import { 
  CHANGE_VOTE
 } from "./actionTypes.js";

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
      const { id, votes } = action;
      console.log(votes);
      return {
        ...state,
        titles: state.titles.map(
          t => {
            return t.id === +id ? { ...t, votes} : t
          }
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
    default:
      return state;
  }
}

export default voteReducer;