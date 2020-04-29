import {authAPI} from "../api/api.js"
import {stopSubmit} from "redux-form"

let initialState = {
  userId:null,
  email:null,
  login:null,
  isAuth:false
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};
//ActionCreators////////////////////////
export let setAuthUserData = (userId, email, login, isAuth) => {
  return { type: "SET_USER_DATA", data:{userId, email, login, isAuth} };
};

export const getAuthUserData=()=>async(dispatch)=>{
    let response = await authAPI.getAuth() //вернули еще один промис для initializeAPP чтобы там через then узнать о завершении асинхронной операции 
        if(response.resultCode===0){
          let {id, email, login }=response.data;
        dispatch(setAuthUserData(id, email, login, true));}
  }

export const getAutorizeUser=(formData)=>async (dispatch)=>{
   let response = await authAPI.getLogin(formData)
        if(response.resultCode===0){
          dispatch(getAuthUserData())}
        else{ 
          let message = response.messages.length>0?response.messages[0]:"some error"
          dispatch(stopSubmit("login",{_error:message}))
        }
   }
  

  export const getLogOut=()=>async (dispatch)=>{
    let response = await  authAPI.getLogOut()
          if(response.resultCode===0)
            dispatch(setAuthUserData(null, null, null, false))
     }
    


export default authReducer;

