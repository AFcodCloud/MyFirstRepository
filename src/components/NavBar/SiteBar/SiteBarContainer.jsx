import {connect} from "react-redux"
import SiteBar from "./SiteBar";

const mapStateToProps = (state)=>{
  return{
    SiteBar: state.SiteBar
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
  }
}

const SiteBarContainer = connect(mapStateToProps, mapDispatchToProps)(SiteBar);

export default SiteBarContainer;
