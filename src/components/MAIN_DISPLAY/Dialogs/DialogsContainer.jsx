import {onChangeMessage, addMessage} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirectHOC from "../../HOC/AuthRedirectHOC";
import { compose } from "redux";


const mapStateToProps=(state)=>{
  return{
    messagesPage:state.messagesPage
  }
}


export default compose(withAuthRedirectHOC, connect(mapStateToProps, {addMessage}))(Dialogs)





/* const mapDispatchToProps=(dispatch)=>{   пример того как можно диспатчить в стор иначе, именно здесь видно как connect подставляет колбек и то что мы не экшен криэйтор сам диспатчим 
  return{
    addMessage:()=>{
      dispatch(addMessage());
    },
    onChangeMessage:(newMessage)=>{
      dispatch(onChangeMessage(newMessage));
    }
  }
} */