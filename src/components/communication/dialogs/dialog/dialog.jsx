import React from "react";
import styles from "./dialog.module.css"

function Dialog(props){
    return(
        <div>
            <div className={styles.header}>{props.name}</div>
            <hr/>
        </div>
    )
}

export default Dialog