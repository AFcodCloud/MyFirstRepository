import {profileAPI} from '../api/api.js' 
import { stopSubmit } from 'redux-form';

let initialState={
  psd : [{ id: 1, message: "It's my first post!", likesCount: 0 }],
  profile:null, 
  status:""
}

const profileReducer = (state=initialState, action) =>{
  switch(action.type){
  case "ADD_POST": 
        let newPost = {id:state.psd.length+1,
          message: action.textPost,
          likesCount:0};
         return {...state, 
                  psd:[...state.psd, newPost]}
  case "DELETE_POST": 
                   return {...state, 
                            psd:[...state.psd.filter(p=>p.id!=action.postId)]}  
        
        case "ADD_LIKE":
        return {...state,
                psd:[...state.psd.map(p=>{
                  if(p.id==action.like){
                    if(p.likesCount==1){
                    return{...p, likesCount:0}}
                    else if(p.likesCount==0){
                      return{...p, likesCount:1}
                    }
                  }return p
                })]
        }
        case "SET_USER_PROFILE":
        return {...state, profile:action.profile}
        case "SET_USER_STATUS":
        return {...state, status:action.status}
        case "SAVE_PHOTO_SUCCES":
          return {...state, profile:{...state.profile, photos:action.photos}}
      default:
      return state;}
}
//ActionCreators////////////////////////

export let setUserProfile=(profile)=>{
  return{type:"SET_USER_PROFILE", profile}
} 

export let setUserStatus=(status)=>{
  return{type:"SET_USER_STATUS", status}
} 

export let addPost =(textPost)=>{
  return{type:"ADD_POST", textPost}
}
export let deletePost =(postId)=>{
  return{type:"DELETE_POST", postId}
}
export let addLike =(like)=>{
  return{type:"ADD_LIKE", like}
}
export let savePhotoSuccess =(photos)=>{
  return{type:"SAVE_PHOTO_SUCCES", photos}
}




//thunks
export const getUserProfile=(userId)=>{
  return (dispatch)=>{
  profileAPI.getUserProfile(userId).then(response=>{  
    dispatch(setUserProfile(response))})
  }
}

export const getProfileStatus=(userId)=>async(dispatch)=>{
  let response = await profileAPI.getStatus(userId)  
    dispatch(setUserStatus(response))}

export const getUpdateStatus=(status)=>async (dispatch)=>{
   let response = await profileAPI.updateStatus(status)
      if(response.resultCode===0){
      dispatch(setUserStatus(status))}
    }

    export const savePhoto=(file)=>async (dispatch)=>{
      let response = await profileAPI.savePhoto(file)
         if(response.resultCode===0){
         dispatch(savePhotoSuccess(response.data.photos))}
       }

    export const saveProfile=(profileData)=>async (dispatch, getState)=>{
      const userId= getState().auth.userId
      const response = await profileAPI.saveProfile(profileData)
       if(response.resultCode===0){
         dispatch(getUserProfile(userId))}
         else {
          let wrongNetwork = response.messages[0]
            .slice(
              response.messages[0].indexOf(">") + 1,
              response.messages[0].indexOf(")")
            )
            .toLocaleLowerCase();
          dispatch(
            stopSubmit("editProfile", {
              contacts: { [wrongNetwork]: response.messages[0] }
            })
          );
          return Promise.reject(response.messages[0]);
        }
         }

export default profileReducer;


