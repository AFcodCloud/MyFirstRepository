import {addPost, addLike} from "../../../../redux/profileReducer.js";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


const mapStateToProps = (state)=>{
  return {
    profilePage:state.profilePage.psd
  }
}



let MyPostsContainer = connect(mapStateToProps, {addPost, addLike})(MyPosts)

export default MyPostsContainer;