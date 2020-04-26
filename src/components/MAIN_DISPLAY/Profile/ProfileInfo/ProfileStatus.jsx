import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatus =(props)=> {

 let [editMode, setEditMode] = useState(false)
 let [status, setStatus] = useState(props.status)
 
 let deactivateEditMode=()=>{
    setEditMode()
    if(props.status!==status){
    props.getUpdateStatus(status)
    }
 }
 useEffect(()=>{
   setStatus(props.status)},[props.status])

 let onChangeStatus=(e)=>{
    setStatus(e.currentTarget.value)
  }


    return(
    <div>
      {!editMode &&
      <div>
        <span onDoubleClick={setEditMode}>{props.status||"..."}</span>
      </div>
  }
      {editMode &&
      <div>
        <input onChange={onChangeStatus} onBlur={deactivateEditMode} autoFocus={true}  value={status}/>
      </div>
  }
    </div>
    )
  }

export default ProfileStatus;

