import React from "react";
import style from "./../Dialogs.module.css";

const Message = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div>
      <div className={style.dialog}>{props.message}</div>
      <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
    </div>
  ); 
};

export default Message;
