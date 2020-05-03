import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = props => {
  return (
    <div>
      <ProfileInfo getUpdateStatus={props.getUpdateStatus} 
                  profile={props.profile} 
                  status={props.status}
                  isOwner={props.isOwner}
                  savePhoto={props.savePhoto}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
