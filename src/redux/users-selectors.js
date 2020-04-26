import { createSelector } from "reselect"

const selectUsersPrimitive = (state)=>{
  return state.usersPage.users
}
export const selectUsers = createSelector(selectUsersPrimitive, (users)=>{ ///принимает простой селектор
  return users.filter(u=>true)
})


export const selectPageSize = (state)=>{
  return state.usersPage.pageSize
}
export const selectTotalUsersCount = (state)=>{
  return state.usersPage.totalUsersCount
}
export const selectCurrentPage = (state)=>{
  return state.usersPage.currentPage
}
export const selectIsFetching = (state)=>{
  return state.usersPage.isFetching
}
export const selectFollowingBlock = (state)=>{
  return state.usersPage.followingBlock
}


