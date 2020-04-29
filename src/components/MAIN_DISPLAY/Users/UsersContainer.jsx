import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {selectPageSize, selectUsers, selectTotalUsersCount, selectCurrentPage, selectIsFetching, selectFollowingBlock } from "../../../redux/users-selectors";
import { follow, getUsers, unFollow } from "../../../redux/usersReducer";
import Preloader from "../../common/Preloaders/Preloader";
import withAuthRedirectHOC from "../../HOC/AuthRedirectHOC";
import UsersList from "./UsersList";



class  Users extends React.Component  {

  componentDidMount(){
   this.props.getUsers(this.props.currentPage, this.props.pageSize)}
    
  onPageChanged=(pageNumber)=>{
    this.props.getUsers(pageNumber, this.props.pageSize)}

  render(){
     return <>
       {this.props.isFetching?<Preloader/>:null}
      <UsersList totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingBlock={this.props.followingBlock} />
                
                </>
}
};

const mapStateToProps=(state)=>{         
  return{
    users:selectUsers(state),
    pageSize:selectPageSize(state),
    totalUsersCount:selectTotalUsersCount(state),
    currentPage:selectCurrentPage(state),
    isFetching:selectIsFetching(state),
    followingBlock:selectFollowingBlock(state)
  }
}



export default compose(withAuthRedirectHOC, connect(mapStateToProps, {getUsers, follow, unFollow}))(Users)


