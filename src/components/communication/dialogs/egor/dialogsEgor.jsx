import React from "react";
import styles from "./dialogsEgor.module.css"
import Message from "../message/message";
import Dialog from "../dialog/dialog";


function DialogsEgor(){
    return(
        <div className={styles.dialogs}>
            <Dialog name="Egor"/>
            <Message name="Egor" text="How are you"/>
            <Message name="You" text="I am fine, and you?"/>
            <Message name="Egor" text="Me too"/>
        </div>
    )
}

export default DialogsEgor;