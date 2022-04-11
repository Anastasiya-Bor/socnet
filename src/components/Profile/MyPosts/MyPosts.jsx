import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {

  let posts = [
    {id: 1, message: "Hi, how are you?", likeCount: 11},
    {id: 2, message: "It is my first post", likeCount: 65},
    
  ]
  
  let postsElements = 
    posts.map( post => <Post message={post.message} likeCount={post.likeCount} />);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
