import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloaders/Preloader"
import ProfileStatus from "./ProfileStatus.jsx"

const ProfileInfo = ({getUpdateStatus, profile, status, isOwner,savePhoto}) => {
 const onMainPhotoSelected = (e)=>{
  if(e.target.files.length){
    savePhoto(e.target.files[0])}
 }
  if (!profile){
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
          src={profile.photos.large ? profile.photos.large : "https://static.thenounproject.com/png/404950-200.png"}
        alt="Ava"/> 
        </div> 
          <div className={s.description}>
            <li>{profile.fullName}</li>
            <li>{profile.aboutMe}</li>
            <li>{profile.lookingForAJobDescription}</li>
            <li>{profile.lookingForAJob ? "ищу работу" : "уже работаю"}</li>
          </div>
      </div>
       {isOwner&&<input type={"file"} onChange={onMainPhotoSelected}/>}
       <ProfileStatus getUpdateStatus={getUpdateStatus}  status={status}/* externalStatus={status} */ />
    </div>
  );
};

export default ProfileInfo;
