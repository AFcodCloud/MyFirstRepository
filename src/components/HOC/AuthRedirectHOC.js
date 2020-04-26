import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

let mapStateToProps=(state)=>({isAuth:state.auth.isAuth})

let withAuthRedirectHOC = (Component)=>{
    let wrapperRedirect=(props)=>{
        if(!props.isAuth) return (<Redirect to="/login"/>);
        return <Component {...props}/>
    } 
    let ConnectAuthRedirectHOC = connect(mapStateToProps,{})(wrapperRedirect)
    return ConnectAuthRedirectHOC;
}



export default withAuthRedirectHOC;