import * as axios from "axios"

const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/" ,
    headers:{
        "API-KEY":"2cfd1311-9402-4c75-88b1-b23cf92e9723"
    }
})

export const userAPI = {
    getUsers(currentPage=1, pageSize=100){
   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response=>response.data)
    },
    follow(userId){
       return instance.post(`follow/${userId}`)
       .then(response=>response.data)},

       unFollow(userId){
        return instance.delete(`follow/${userId}`)
        .then(response=>response.data)},

        getAuth(){
      return instance.get(`auth/me`)
      .then(response => response.data)},
}

export const profileAPI = {
   getUserProfile(userId){
      return instance.get(`profile/`+ userId)
      .then(response=>response.data)},
    
   getStatus(userId){
      return instance.get(`profile/status/`+ userId)
      .then(response=>response.data)},
      
   updateStatus(status){
      return instance.put(`profile/status/`, {status:status})
      .then(response=>response.data)},

   savePhoto(photoFile){
     let formData= new FormData();
     formData.append("image", photoFile);
      return instance.put(`profile/photo`, formData)
      .then(response=>response.data)},

   saveProfile(profileData){
          return instance.put(`profile/`, profileData)
          .then(response=>response.data)}
}


export const authAPI = {

      getAuth(){
    return instance.get(`auth/me`)
    .then(response => response.data)},
    
    getLogin(formData){
      return instance.post(`auth/login`,{...formData})
      .then(response => response.data)},
      
    getLogOut(){
        return instance.delete(`auth/login`)
        .then(response => response.data)}
    
}
export const securityAPI = {

   getCaptchaUrl(){
 return instance.get(`security/get-captcha-url`)
 .then(response => response.data)},

 
}

/* savePhoto(photoFile){
   let formData= new FormData();
   formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers:{ //можно не отправлять 
      'Content-Type':'multipart/form-data' //так как эта строка формируется автоматически конструктором FormData()
      }
    })
    .then(response=>response.data)} */