import React from "react";
import { NavLink } from 'react-router-dom';
import userPhoto from "../../../../assets/images/ava.svg";
import s from "./UsersItem.module.css";


const UsersItem = ({user, follow, unFollow, followingBlock}) => {
  
   const ibg={
    backgroundImage:`url(${user.photos.large != null ? user.photos.large : userPhoto})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    width:"150px",
    height:"170px"
    }
    return(
        <div className={s.usersItem}>
          <div>
            <NavLink to={'/profile/'+user.id}>
                  <div style={ibg} ></div>
            </NavLink>
            <div className={s.fullName}>{user.name}</div>
            <div className={s.status}>{user.status}</div>
           
          </div>
          <div>
            {user.followed ? (
              <button disabled={followingBlock.some(id=>id===user.id)}
                      onClick={() => { unFollow(user.id) }}
                      className={s.fallow}>
                          unfollow <i className="fa fa-user" aria-hidden="true" />
              </button>) : 
              (<button disabled={followingBlock.some(id=>id===user.id)}
                       onClick={() => {follow(user.id);}}
                       className={s.fallow}>
                          follow <i className="fa fa-user-plus" aria-hidden="true" />
              </button>)}
          </div>
        </div>)

  }


export default UsersItem;
