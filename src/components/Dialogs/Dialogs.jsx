import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";


const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs
  .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  
  let messagesElements = state.messages
  .map( message => <Message message={message.message} id={message.id} />);
  
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }
  
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  } 

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={style.messages}>
        <div>{ messagesElements }</div>
        <div>
          <div><textarea value={newMessageBody} 
                          onChange={onNewMessageChange}
                          placeholder="Enter your message"></textarea></div>
          <div><button onClick={onSendMessageClick}>SEND</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
