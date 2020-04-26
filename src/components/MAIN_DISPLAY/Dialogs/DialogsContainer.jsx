import { addMessage} from "../../../redux/dialogsReducer";
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
