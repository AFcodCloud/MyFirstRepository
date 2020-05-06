import {authAPI, securityAPI} from "../api/api.js"
import {stopSubmit} from "redux-form"

let initialState = {
  userId:null,
  email:null,
  login:null,
  isAuth:false,
  captcha:null
};
const authReducer = (state = initialState, action) => { 
  debugger
  switch (action.type) {
    case "SET_USER_DATA":
    case "GET_CAPTCHA_URL_SUCCESS":
      return {
        ...state,
        ...action.payload
      };
      default:
      return state;
  }
};
//ActionCreators////////////////////////
export let setAuthUserData = (userId, email, login, isAuth) => {
  return { type: "SET_USER_DATA", payload:{userId, email, login, isAuth} };
};
export let getCaptchaUrlSucces = (captcha) => {
  debugger
  return { type: "GET_CAPTCHA_URL_SUCCESS", payload:{captcha} };
};

//thunks///////////////////////////////
export const getAuthUserData=()=>async(dispatch)=>{
    const response = await authAPI.getAuth() //вернули еще один промис для initializeAPP чтобы там через then узнать о завершении асинхронной операции 
        if(response.resultCode===0){
          let {id, email, login }=response.data;
        dispatch(setAuthUserData(id, email, login, true));}
  }

export const getAutorizeUser=(formData)=>async (dispatch)=>{
   const response = await authAPI.getLogin(formData)
        if(response.resultCode===0){
          dispatch(getAuthUserData())}
        else{ 
          if(response.resultCode===10){
            dispatch(getCaptchaUrl())
          }
          let message = response.messages.length>0?response.messages[0]:"some error"
          dispatch(stopSubmit("login",{_error:message}))
        }
   }
   export const getCaptchaUrl=()=>async (dispatch)=>{
    const response = await securityAPI.getCaptchaUrl()
    const captcha = response.url;
    dispatch(getCaptchaUrlSucces(captcha))     
    }

  export const getLogOut=()=>async (dispatch)=>{
    const response = await  authAPI.getLogOut()
          if(response.resultCode===0)
            dispatch(setAuthUserData(null, null, null, false))
     }
    


export default authReducer;

