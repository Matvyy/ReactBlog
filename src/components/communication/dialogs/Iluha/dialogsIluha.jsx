import React from "react";
import styles from "./dialogsIluha.module.css"
import Message from "../message/message";
import Dialog from "../dialog/dialog";

function DialogsIluha(){
    return(
        <div className={styles.dialogs}>
            <Dialog name="Iluha"/>
            <Message name="Iluha" text="Hi"/>
            <Message name="You" text="Hallo"/>
        </div>
    )
}

export default DialogsIluha;