import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./friend.module.css"

function Friend(props){

    let link = "/message/" + props.id

    return(
        <div>
             <NavLink to={link} className={styles.friend}>
                <div className={styles.avatar}>{<img src = {props.avatar} alt = "img"/>}</div>
                <div className={styles.ns}>   
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.status}>{props.status}</div>
                </div>
            </NavLink>
        </div>
    )
}

export default Friend