import React from "react";
import styles from "./dialogsDimon.module.css";
import Message from "../message/message";
import Dialog from "../dialog/dialog";

function DialogsDimon(){
    return(
        <div className={styles.dialogs}>
            <Dialog name="Dimon"/>
            <Message name="Dimon" text="Yo"/>
            <Message name="You" text="Hi" />
        </div>
    )
}

export default   DialogsDimon;