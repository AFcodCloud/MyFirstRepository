import React from "react"
import s from "./Friends.module.css"
import { connect } from "react-redux"

const Friends = (props)=>{
    //let friends = props..map(f=>{return <div className={s.frinedItem}> </div>})
    return(
     <div>friens</div>
    )
}


  
  let mapStateToProps=(state)=>({
      users:state.friends.users
  })



export default connect(mapStateToProps,{}) (Friends);



    
  