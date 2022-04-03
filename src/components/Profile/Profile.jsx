import React from "react";
import MyPosts from "./MyPosts/MyPosts";
// import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://zastavok.net/main/animals/1414658885.jpg" alt="logo"></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
