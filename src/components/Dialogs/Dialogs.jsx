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

  let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Maksim G"},
    {id: 3, name: "Ilon M"},

  ]

  let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yo"},

  ]

  let dialogsElements = dialogs
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
  
  let messagesElements = messages
    .map( message => <Message massage={message.message} id={message.id} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  );
};

export default Dialogs;
