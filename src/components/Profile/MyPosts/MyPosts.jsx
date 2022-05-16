import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";
// import addPostActionCreator from "././"


const MyPosts = (props) => {

  let postsElements = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount} />);
  
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} 
                     value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
