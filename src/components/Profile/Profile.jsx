import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import style from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
