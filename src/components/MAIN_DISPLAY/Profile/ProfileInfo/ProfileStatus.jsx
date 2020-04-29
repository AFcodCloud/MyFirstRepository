import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatus =({getUpdateStatus, externalStatus})=> {

 let [editMode, setEditMode] = useState(false)
 let [status, setStatus] = useState(externalStatus)
 
 let deactivateEditMode=()=>{
    setEditMode()
    if(externalStatus!==status){
    getUpdateStatus(status)
    }
 }
 useEffect(()=>{
   setStatus(externalStatus)},[externalStatus])

 let onChangeStatus=(e)=>{
    setStatus(e.currentTarget.value)
  }


    return(
    <div>
      {!editMode &&
      <div>
        <span onDoubleClick={setEditMode}>{externalStatus||"..."}</span>
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

