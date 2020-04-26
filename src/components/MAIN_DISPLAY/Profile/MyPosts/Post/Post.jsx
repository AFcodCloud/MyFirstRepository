import React from "react";
import s from "./Post.module.css";
import LikeCount from "./LikeCount/LikeCount"

const Post = props => {

  return (
    <div className={s.item}>
      <div className={s.postIMG}>
      <img
        src="https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg"
        alt="AvaBin"
      />
      </div>
      <div className={s.postMessage}>
      {props.message}
      </div>
      <div onClick={(e)=>{props.addLike(props.id)}} className={s.likes}>likes {props.likesCount}</div>
    </div> 
  );
};

export default Post;