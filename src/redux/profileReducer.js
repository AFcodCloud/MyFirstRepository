import {profileAPI} from '../api/api.js' 

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


export default profileReducer;


