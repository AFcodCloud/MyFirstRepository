import React from "react";
import { NavLink } from 'react-router-dom';
import userPhoto from "../../../../assets/images/ava.svg";
import s from "./UsersItem.module.css";


const UsersItem = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {pages.push(i)}

  
      let follow=(userId)=> {
        props.follow(userId)}
          

       let unFollow=(userId)=>{
       props.unFollow(userId)}
            

return(
  <div>
    <div className={s.pagesNav}>
    {pages.map(p => {
      return (
        <span
          className={props.currentPage == p && s.selectedPage}
          onClick={e => {props.onPageChanged(p);}}>
          {p}
        </span>);})} 
      </div>


  <div className={s.itemsContainer}>
    {props.users.map(u => {
const ibg={
  backgroundImage:`url(${u.photos.large != null ? u.photos.large : userPhoto})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  width:"150px",
  height:"170px"
  }

       return (
      <div className={s.usersItem}>
        <div>
          <NavLink to={'/profile/'+u.id}>
                <div style={ibg} ></div>
          </NavLink>
          <div className={s.fullName}>{u.name}</div>
          <div className={s.status}>{u.status}</div>
         
        </div>
        <div>
          {u.followed ? (
            <button disabled={props.followingBlock.some(id=>id===u.id)}
                    onClick={() => { unFollow(u.id) }}
                    className={s.fallow}>
                        unfollow <i className="fa fa-user" aria-hidden="true" />
            </button>) : 
            (<button disabled={props.followingBlock.some(id=>id===u.id)}
                     onClick={() => {follow(u.id);}}
                     className={s.fallow}>
                        follow <i className="fa fa-user-plus" aria-hidden="true" />
            </button>)}
        </div>
      </div>)})}
    </div>
    </div>)
}


export default UsersItem;

















{/* <div className={s.locations}>
<div className={s.city}>
  {u.location != undefined ? u.location.city : "unknown"}
</div>
<div className={s.country}>
  {u.location != undefined ? u.location.country : "unknown"}
</div>
</div> */}