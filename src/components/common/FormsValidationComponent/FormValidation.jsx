import React from "react"
import s from "./FormValidation.module.css"
import { Field } from "redux-form";




export const Textarea = ({input,meta, ...props})=>{
let showError = meta.touched&&meta.error;
    return (
        <div>
            <div className={s.container}>
            <textarea className={s.textarea +" "+(showError ? s.errorBorder : "")} {...input} {...props}/>
            {showError ?<span className={s.errorMessage}>{meta.error}</span>:null}
            </div>
        </div>
    )   
}

export const Input = ({input,meta, ...props})=>{
    let showError = meta.touched&&meta.error;
    return (
        <div>
            <div className={s.container}>
            <input className={showError?s.errorBorder:""} {...input} {...props}/>
            {meta.touched&&meta.error?<span className={s.errorMessage}>{meta.error}</span>:null}
            </div>
        </div>
    )   
}

export const createField = (placeholder, name, validators, component, props={}, text="")=>{
    return(
            <div>
        <Field placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}/>{text}
             </div>
    )
}