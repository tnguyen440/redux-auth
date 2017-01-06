import * as types from './actionTypes';
import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export function fetchPosts() {
  return function(dispatch) {
    return axios.get(`${ROOT_URL}/posts`)
      .then(posts => {
        dispatch(fetchPostsSuccess(posts.data));
        //console.log(posts.data);
      }).catch(error => {
        throw error;
    });
  }
}

export function fetchPostsSuccess(posts) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    posts
  }
}
