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
    case "UNFOLLOW":
        return {
        ...state,
        users: [
          ...state.users.map(u => {
            if (u.id === action.userId) {
              return { ...u, followed: false };
            }
            return u;
          })
        ]
      };
    case "SET_USERS": {
      return { ...state, users: [ ...action.users] };
    }
    case "CURRENT_PAGE": {
      return { ...state, currentPage:action.currentPage };
    }
    case "SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount:action.totalCount };
    }
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching:action.isFetching };
    }
    case "SET_TOGGLE_BLOCK_FOLLOWING": {
      return { ...state, 
            followingBlock: action.block?[...state.followingBlock, action.userId]
                                        :state.followingBlock.filter(id=>id!==action.userId)};
    }
    default:
      return state;
  }
};
//ActionCreators////////////////////////
export let followSucces = userId => {
  return { type: "FOLLOW", userId };
};
export let unFollowSucces = userId => {
  return { type: "UNFOLLOW", userId };
};
export let setUsers = users => {
  return { type: "SET_USERS", users };
};
export let setCurrentPage=(currentPage)=>{
  return {type:"CURRENT_PAGE", currentPage}
}

export let setTotalUsersCount=(totalCount)=>{
  return{type:"SET_TOTAL_USERS_COUNT", totalCount}
}
export let toggleIsFetching=(isFetching)=>{
  return{type:"TOGGLE_IS_FETCHING", isFetching}
}
export let toggleBlockFollowing=(block, userId)=>{
  return{type:"SET_TOGGLE_BLOCK_FOLLOWING", block, userId}
}
///thunks
export const getUsers = (currentPage, pageSize)=>{
  return (dispatch)=>{
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(currentPage, pageSize)
    .then(response=>{
      dispatch(setCurrentPage(currentPage))
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount))})
  }
}

export const follow = (userId)=>{
  return (dispatch)=>{
    dispatch(toggleBlockFollowing(true, userId))
        userAPI.follow(userId)
        .then(response=>{
          if(response.resultCode===0){
            dispatch(followSucces(userId))}
            dispatch(toggleBlockFollowing(false, userId))}
        )}
}

export const unFollow = (userId)=>{
  return (dispatch)=>{
    dispatch(toggleBlockFollowing(true, userId))
        userAPI.unFollow(userId)
        .then(response=>{
          if(response.resultCode===0){
            dispatch(unFollowSucces(userId))}
            dispatch(toggleBlockFollowing(false, userId))}
        )}
}




export default usersReducer;

