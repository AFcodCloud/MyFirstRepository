import {userAPI} from "../api/api"

let initialState = {
  users: [],
  pageSize:100,
  totalUsersCount:0,
  currentPage:1,
  isFetching:false,
  followingBlock:[]
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: [
          ...state.users.map(u => {
            if (u.id === action.userId) {
              return { ...u, followed: true };
            }
            return u;
          })
        ]
      };
   
    default:
      return state;
  }
};
//ActionCreators////////////////////////
export let followSucces = userId => {
  return { type: "FOLLOW", userId };
};

///thunks
export const getFriends = (userId)=>{
  return (dispatch)=>{
        userAPI.unFollow(userId)
        .then(response=>{
          if(response.resultCode===0){
            dispatch(unFollowSucces(userId))}
            dispatch(toggleBlockFollowing(false, userId))}
        )}
}


/* /users?term=takeThisLol */

export default friendsReducer;

