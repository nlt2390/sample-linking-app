import * as types from './types';

export const actionFetchPosts = (data) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
      dispatch({
        type: types.FETCH_POSTS_SUCCESS,
        payload: data,
      });
    });
};
