import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloaders/Preloader"
import ProfileStatus from "./ProfileStatus.jsx"
import DescriptionProfileForm  from "./DescriptionProfileForm";

const ProfileInfo = ({getUpdateStatus, profile, status, isOwner,savePhoto, saveProfile}) => {
 const onMainPhotoSelected = (e)=>{
  if(e.target.files.length){
    savePhoto(e.target.files[0])}
 }
 let [editMode, setEditMode]=useState(false)
 let onSubmit=(formData)=>{
  saveProfile(formData).then(
    ()=>{setEditMode(false)}
  )
   
 }
  if (!profile){
    return (<Preloader/>)
  }
  return (
    <div>
      <div className={s.content}>
        <img
          src="http://interier-foto.ru/wp-content/uploads/dlinnye-foto-2.jpg"
          alt="mount"
        />
      </div>
      <div className={s.descriptionBlock}>
          <div className={s.ava}> <img
          src={profile.photos.large ? profile.photos.large : "https://static.thenounproject.com/png/404950-200.png"}
        alt="Ava"/> 
        </div> 
          <div className={s.description}>
               {editMode? <DescriptionProfileForm onSubmit={onSubmit} 
                                                  profile={profile}
                                                  initialValues={profile}/> 
               :<DescriptionProfile profile={profile} 
                                    isOwner={isOwner}
                                    goToEditMode={()=>{setEditMode(true)}}/>}
          </div>
      </div>
       {isOwner&&<input type={"file"} onChange={onMainPhotoSelected}/>}
       <ProfileStatus getUpdateStatus={getUpdateStatus}  status={status}/* externalStatus={status} */ />
    </div>
  );
};

const DescriptionProfile = ({profile, isOwner, goToEditMode})=>{
  return (
    <div>
      {isOwner&&<div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
      <b>{profile.fullName}</b>
    </div>
    <div>
      <b>{profile.aboutMe}</b>
    </div>
    <div>
      <b>Looking for a job: </b>{profile.lookingForAJob?"yes":"no"}
    </div>
    <div>
      <b>My professional skills: </b>{profile.lookingForAJobDescription}
    </div>
    <div>
      <b>About me: </b>{profile.aboutMe}
    </div>
    <div>
      <b>Contacts :</b>{Object.keys(profile.contacts).map(key=>{return <Contacts key={key}
                                                    contactTitle={key}
                                                    contactValue={profile.contacts[key]}/>})}
    </div>
    </div>
  )
}
const Contacts = ({contactTitle, contactValue})=>{
  return(
  <div><b>{contactTitle} : </b>{contactValue}</div>
  )
}


export default ProfileInfo;


/* 
<li>{profile.fullName}</li>
<li>{profile.aboutMe}</li>
<li>{profile.lookingForAJobDescription}</li>
<li>{profile.lookingForAJob ? "ищу работу" : "уже работаю"}</li> */


/* {"aboutMe":null,
"contacts":{"facebook":null,
            "website":null,
            "vk":null,
            "twitter":null,
            "instagram":null,
            "youtube":null,
            "github":null,
            "mainLink":null},
"lookingForAJob":false,
"lookingForAJobDescription":null,
"fullName":"AlexeyF91",
"userId":6796,
  "photos":{"small":"https://social-network.samuraijs.com/activecontent/images/users/6796/user-small.jpg?v=6",
            "large":"https://social-network.samuraijs.com/activecontent/images/users/6796/user.jpg?v=6"}} */
