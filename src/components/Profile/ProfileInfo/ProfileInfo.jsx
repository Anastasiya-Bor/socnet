import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://zastavok.net/main/animals/1414658885.jpg"
          alt="logo"
        ></img>
      </div>
      <div className={style.descriptionBlock}> 
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
