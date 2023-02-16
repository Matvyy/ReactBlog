import React from "react";
import styles from "./profile.module.css";
import Me from "./me/me";
import Post from "./post/post";

let posts =[
  {likes: 10, text: 'post1'},
  {likes: 17, text: 'post2'},
  {likes: 14, text: 'post3'},
]

function Profile(){
    return(
    <div className={styles.profile}>
      <Me/>
      <br/>
      <div className={styles.connect}>Posts</div>
      <hr/>
      <Post massage={posts[0].text}/>
      <Post massage={posts[1].text}/>
      <Post massage={posts[2].text}/>
    </div>
    )
}

export default Profile;