import React from "react";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";


const MyPosts = (props) => {

  let postsElements = 
    props.posts.map( post => <Post message={post.message} likeCount={post.likeCount} />);
  
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
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
          <button onClick={ onAddPost }>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
