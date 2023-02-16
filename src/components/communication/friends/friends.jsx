import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./friends.module.css"
import Friend from "./friend/friend";

const info ={
    egor: {
        avatar: "https://ik.imgkit.net/ikmedia/website-assets/oval-bg_dnn8jSHS7h.svg",
        name: "Egor",
        status: "online",
        id: "egor"
    },

    iluha: {
        avatar: "https://www.freeiconspng.com/thumbs/pacman-png/pacman-png-15.png",
        name: "Iluha",
        status: "last seen recently",
        id: "iluha"
    },

    dimon: {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxBwQSBs5t3-NZjZOuouTg1anuDFcnBUCCA&usqp=CAU",
        name: "Dimon",
        status: "online",
        id: "dimon"
    }
}

function Friends(){
    return(
        <div className={styles.friends}>
                    <div className={styles.item}>
                    <Friend avatar={info.egor.avatar} name={info.egor.name} status={info.egor.status} id={info.egor.id}/>
                    <Friend avatar={info.iluha.avatar} name={info.iluha.name} status={info.iluha.status} id={info.iluha.id}/>
                    <Friend avatar={info.dimon.avatar} name={info.dimon.name} status={info.dimon.status} id={info.dimon.id}/>
                    </div>
                </div>
    )
}

export default Friends;