import { FETCH_POSTS, NEW_POST } from './Types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch({
        type: FETCH_POSTS,
        payload: data,
      });
    })
    .catch(error => console.log(error));
  //   console.log(posts);
};
