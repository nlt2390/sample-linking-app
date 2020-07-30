import * as types from './types';

export const actionFetchPosts = (data) => (dispatch) => {
  dispatch({
    type: types.FETCH_POSTS_SUCCESS,
    payload: data,
  });
};
