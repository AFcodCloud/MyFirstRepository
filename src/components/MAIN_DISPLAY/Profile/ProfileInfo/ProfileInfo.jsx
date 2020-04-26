import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloaders/Preloader"
import ProfileStatus from "./ProfileStatus.jsx"

const ProfileInfo = (props) => {
  if (!props.profile){
    return (<Preloader/>)
  }
  return (
    <div>
      <div className={s.content}>
        <img
          src="https://www.w3schools.com/howto/img_snow_wide.jpg"
          alt="mount"
        />
      </div>
      <div className={s.descriptionBlock}>
          <div className={s.ava}> <img
          src={props.profile.photos.large ? props.profile.photos.large : "https://static.thenounproject.com/png/404950-200.png"}
        alt="Ava"/> 
        </div> 
          <div className={s.description}>
            <li>{props.profile.fullName}</li>
            <li>{props.profile.aboutMe}</li>
            <li>{props.profile.lookingForAJobDescription}</li>
            <li>{props.profile.lookingForAJob ? "ищу работу" : "уже работаю"}</li>
          </div>
      </div>
       <ProfileStatus getUpdateStatus={props.getUpdateStatus} status={props.status} />
    </div>
  );
};

export default ProfileInfo;
