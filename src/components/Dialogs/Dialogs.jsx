import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink
        to={path}
        className={({ isActive }) => 
          isActive ? s.activeDialog : s.unActiveDialog
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.massage}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Maksim G" id="2" />
        <DialogItem name="Ilon M" id="3" />
      </div>
      <div className={s.messages}>
        <Message massage="Hi" />
        <Message massage="How are you?" />
        <Message massage="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
