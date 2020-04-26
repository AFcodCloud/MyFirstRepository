import React from "react";
import { useState } from "react";
import { useEffect } from "react";
//https://habr.com/ru/company/ruvds/blog/445276/    //статья по хукам
const ProfileStatus =(props)=> {

 let [editMode, setEditMode] = useState(false) //хук возвращает массив из 2х элементов первый содержит значение переданное функции, а второй колбек функция для изменения этого значения
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

