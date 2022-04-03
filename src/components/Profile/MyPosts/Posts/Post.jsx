import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  console.log(props);
  return (
  <div className={s.item}>
    <img src='https://avatarko.ru/img/avatar/5/kot_ochki_4754.jpg'></img>
      {props.message} 
    <div>
      <span>like: {props.likeCount}</span>
    </div>
  </div>
  );
};

export default Post;
