import React from "react";
import style from "./me.module.css"

function Me(){
    return(
        <div className={style.aboutMe}>
            <div className={style.hat}><img src="https://media.istockphoto.com/id/1281783803/photo/mountains-velliangiri-view-with-blue-sky-and-green-fores.jpg?s=612x612&w=0&k=20&c=25epzQEXtzNmGMtUoBa13SpHZ4rGz2HDLuHfWaUa51o=" alt="123"/></div>
            <div className={style.avatar}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiAb8BL1D-isBlWgUZUF9xV5PF_a4vFHBog&usqp=CAU" alt="123"/></div>
            <div className={style.text}>
                <div className={style.name}>Matveyyy</div>
                <div>Описание к профилю</div>
            </div>
        </div>
    )
}

export default Me;