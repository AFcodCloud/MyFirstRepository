import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getProfileStatus, getUpdateStatus, getUserProfile, savePhoto } from "../../../redux/profileReducer";
import {selectProfile, selectStatus} from "../../../redux/profile-selectors"
import {selectUserId} from "../../../redux/auth-selectors"
import withAuthRedirectHOC from "../../HOC/AuthRedirectHOC";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
 refreshProfile(){
      let userId=this.props.match.params.userId
   if(!userId){userId=this.props.userId}
      if(!userId){this.props.history.push("/login")}//програмный редирект
   this.props.getUserProfile(userId);
   this.props.getProfileStatus(userId);
 }
 componentDidMount(){
  this.refreshProfile()
 }

 componentDidUpdate(prevProps, prevState){
  if(this.props.match.params.userId!=prevProps.match.params.userId){ 
  this.refreshProfile()}
 }
  render() {
    return (
      <div>
        <Profile {...this.props} 
                  profile={this.props.profile} 
                  updateStatus={this.props.getUpdateStatus}
                  status={this.props.status}
                  isOwner={!this.props.match.params.userId}
                  savePhoto={this.props.savePhoto}/>
      </div>
    );
  }
}
let mapStateToProps=(state)=>( {profile: selectProfile(state), 
                                status:selectStatus(state),
                                userId:selectUserId(state)})


export default compose(withAuthRedirectHOC, connect (mapStateToProps, {getUserProfile,getProfileStatus,getUpdateStatus, savePhoto}),withRouter)(ProfileContainer)