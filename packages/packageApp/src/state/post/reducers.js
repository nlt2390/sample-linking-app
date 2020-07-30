import * as types from './types';

const initState = {
  posts: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    default:
      return state;
  }
}
