import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from "./Login.module.css"
import { connect } from 'react-redux'
import {getAutorizeUser} from "../../../redux/authReducer"
import {Input} from "../../common/FormsValidationComponent/FormValidation.jsx"
import {requared, maxLengthCreator, emailValidator} from "../../../utils/validators/validators.js"
import { Redirect } from 'react-router-dom'

let Login=(props)=>{
    const onSubmit=(formData)=>{
        props.getAutorizeUser(formData)
    }
    if (props.isAuth)return (
        <Redirect to={"profile/"}/>
    )
    return(
        <>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

let maxLength = maxLengthCreator(25)

let LoginForm=(props)=>{
    return(
    <form className={s.form} onSubmit={props.handleSubmit}>
        <div>
        <Field placeholder={"Login"} name={"email"} validate={[requared, emailValidator]} component={Input}/>  
        </div>
        <div>
        <Field placeholder={"Password"} name={"password"} type={"password"} validate={[requared, maxLength]}  component={Input}/>  
        </div>
        <div>
        <Field type={"checkbox"} name={"rememberMe"}  component={Input}/>Remember me  
        </div>
        {props.error&&<div className={s.responseError}>{props.error}</div>}
        <div>
        <button>Log in</button>  
        </div>
    </form>
    )   
}
const LoginReduxForm=reduxForm({form:"login"})(LoginForm)

let mapStateToProps=(state)=>{
    return{
        isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getAutorizeUser})(Login);