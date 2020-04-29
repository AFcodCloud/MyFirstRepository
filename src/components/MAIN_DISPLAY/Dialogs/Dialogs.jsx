import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Messages/Messages.jsx";
import { Field, reduxForm } from "redux-form";
import {Textarea} from "../../common/FormsValidationComponent/FormValidation"
import {requared, maxLengthCreator} from "../../../utils/validators/validators.js"

const Dialogs = props => {
  let messagesElements = props.messagesPage.msd.map(m => (
    <Message message={m.message} />
  ));
  let dialogsElemens = props.messagesPage.dgd.map(d => (
    <DialogItem id={d.id} name={d.name} />
  ));



  let addMessage=(values)=>{
    props.addMessage(values.message);
  } 
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElemens}</div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageReduxForm onSubmit={addMessage}/>
      </div>
    </div>
  );
};

let maxLength = maxLengthCreator(5)
let AddMessageForm =(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field placeholder={"get message"} name={"message"} validate={[requared, maxLength]} component={Textarea}/>
      </div>
      <div>
      <button>send message</button>
      </div>   
    </form>
  )
}
let AddMessageReduxForm=reduxForm({form:"dialogs"})(AddMessageForm)

export default Dialogs;
