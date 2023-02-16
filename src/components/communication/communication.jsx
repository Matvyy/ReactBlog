import React from "react";
import styles from "./communication.module.css"
import Friends from "./friends/friends";
import { Routes, Route, BrowserRouter} from "react-router-dom";

function Communication (props){
    return(

            <div className={styles.message}>
                <div className={styles.name}>Dialogs</div>
                <Friends/>
                
            </div>

    )
}

export default Communication;