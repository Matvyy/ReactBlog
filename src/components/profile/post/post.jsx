import React from "react";
import styles from "./post.module.css"


function Post(props){
    return(
        <div className={styles.post}>
            
            <div className={styles.avatar}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiAb8BL1D-isBlWgUZUF9xV5PF_a4vFHBog&usqp=CAU"/></div>
            <div>
                <div className={styles.name}>Matveyyy</div>
                <div className={styles.text}>{props.massage}</div>
                {/* <div className={styles.likes}>{props.likes}</div> */}

            </div>
            
        </div>
    )
}

export default Post;