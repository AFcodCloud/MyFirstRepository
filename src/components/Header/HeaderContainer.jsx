import React from "react";
import { connect } from "react-redux";
import { selectIsAuth, selectLogin } from "../../redux/auth-selectors";
import { getLogOut } from "../../redux/authReducer";
import Header from "./Header";

class HeaderClass extends React.Component {
  componentDidMount() {

  }
  render() {
    return <Header {...this.props} />;
  }
}


let mapStateToProps = state => {
  return {
    isAuth: selectIsAuth(state),
    login:selectLogin(state)
  };
};

let HeaderContainer = connect(mapStateToProps, {  getLogOut })(HeaderClass);

export default HeaderContainer;
