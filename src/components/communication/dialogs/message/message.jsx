import React from "react";
import styles from "./message.module.css"

function Message(props){
    return(
        <div className={styles.message}>
            <div className={styles.message}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.text}>{props.text}</div>
            </div>
        </div>
    )
}



export default Message;