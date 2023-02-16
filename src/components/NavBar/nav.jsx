import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const active = ({isActive}) => isActive ? styles.active : undefined


function Nav(){
    return(
    <nav className={styles.nav}>
        <div className={styles.items}>
            <div className={styles.item}><NavLink to="/profile" className={active}>Profile</NavLink></div>
            <div className={styles.item}><NavLink to="/communication" className={active}>Masseges</NavLink></div>
            <div className={styles.item}><NavLink to="/news" className={active}>News</NavLink></div>
            <div className={styles.item}><NavLink to="musick" className={active}>Musick</NavLink></div>
            <div className={styles.item}><NavLink to="settings" className={active}>Settings</NavLink></div>
        </div>
    </nav>
    )
}

export default Nav;