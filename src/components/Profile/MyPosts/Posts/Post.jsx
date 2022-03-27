import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
  <div className={s.item}>
    <img src='https://avatarko.ru/img/avatar/5/kot_ochki_4754.jpg'></img>
    post 1
    <div>
      <span>like</span>
    </div>
  </div>
  );
};

export default Post;
