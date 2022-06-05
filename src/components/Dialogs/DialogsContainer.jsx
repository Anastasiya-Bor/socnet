import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import { useSelector, useDispatch } from "react-redux";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  // let state = useSelector((state) => state.dialogsPage);
  // let dispatch = useDispatch();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return <Dialogs updateNewMessageBody={onNewMessageChange} 
                  sendMessage={onSendMessageClick} 
                  dialogsPage={state} />;
};

export default DialogsContainer;
