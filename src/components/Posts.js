import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';
const Posts = props => {
  //   const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     setPosts(data);
    //   })
    //   .catch(error => console.log(error));
    console.log(props);
    props.fetchPosts();
  }, []);
  const postItems = props.posts.map(item => (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  ));
  return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
  );
};
const mapStateToProps = state => ({
  posts: state.posts.items,
});
export default connect(mapStateToProps, { fetchPosts })(Posts);
