import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://zastavok.net/main/animals/1414658885.jpg"
          alt="logo"
        ></img>
      </div>
      <div className={s.descriptionBlock}> 
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
