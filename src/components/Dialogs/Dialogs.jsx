import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  
  let messagesElements = messages
    .map( message => <Message message={message.message} id={message.id} />);

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
