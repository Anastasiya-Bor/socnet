import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>Dimych</div>
            <div className={s.dialog}>Maksim G</div>
            <div className={s.dialog}>Ilon M</div>
        </div>    
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Yo</div>
        </div>
      
    </div>
  );
};

export default Dialogs;
