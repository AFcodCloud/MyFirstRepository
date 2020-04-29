import React from "react";
import s from "./UsersList.module.css";
import UsersItem from "./UsersItem/UsersItem";
import Paginator from "../../common/Paginator/Paginator";

const UsersList = props => {
let elemets = props.users.map((u)=> {return <UsersItem user={u} 
                                            follow={props.follow} 
                                            unFollow={props.unFollow} 
                                            followingBlock={props.followingBlock}/>})      

    return(
            <div> 
             <Paginator totalItemsCount={props.totalUsersCount} 
                       pageSize={props.pageSize} 
                       currentPage={props.currentPage} 
                       onPageChanged={props.onPageChanged} /> 
              <div className={s.itemsContainer}>
               {elemets}
             </div>
            </div>)
  }


export default UsersList;
