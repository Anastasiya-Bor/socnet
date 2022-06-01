import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
  <div className={style.item}>
    <img src='https://avatarko.ru/img/avatar/5/kot_ochki_4754.jpg'></img>
      {props.message} 
    <div>
      <span>like: {props.likeCount}</span>
    </div>
  </div>
  );
};

export default Post;
