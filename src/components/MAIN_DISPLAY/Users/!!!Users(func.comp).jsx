import React from "react";
import s from "./Users.module.css";
import UsersItem from "./UsersItem/UsersItem.jsx";
import * as axios from "axios";


const Users = props => {

  let  getUsers=()=> {
    
  if (props.usersPage.users.length===0){

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
      props.setUsers(response.data.items)
    })
  }    

  }
  let usersElements= props.usersPage.users.map(u=>(<UsersItem usersPage={u} fallow={props.fallow} unFallow={props.unFallow}/>))

  return (
    <div className={s.users}>
        {usersElements}
        <button onClick={getUsers}>Get users</button>
    </div>
  );
};

export default Users;
