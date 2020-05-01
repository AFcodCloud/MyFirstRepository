import React from "react";
import { useState } from "react";
import { useEffect } from "react";


class ProfileStatus extends React.Component {
  state= {
    editMode:false,
    status:this.props.status
  }
  toggleEditMode=()=>{
    this.setState({
      editMode:!this.state.editMode})
      if(this.state.editMode&&(this.props.status!==this.state.status)){
        this.props.getUpdateStatus(this.state.status)
      }
  }
  onChangeStatus=(e)=>{
    this.setState({
      status:e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.status!==this.props.status){
       this.setState({
         status:this.props.status
       })
    }
  }
  render() {
    return(
    <div>
      {!this.state.editMode &&
      <div>
        <span onDoubleClick={this.toggleEditMode}>{this.props.status||"..."}</span>
      </div>
  }
      {this.state.editMode &&
      <div>
        <input onChange={this.onChangeStatus} onBlur={this.toggleEditMode} autoFocus={true} type="text" value={this.state.status}/>
      </div>
  }
    </div>
    )
  }
}
export default ProfileStatus; 

/* 
const ProfileStatus =({getUpdateStatus, externalStatus})=> { //заменить в ProfileInfo пропсы status

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

export default ProfileStatus; */

