import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import ProfileContainer from "./components/MAIN_DISPLAY/Profile/ProfileContainer";
import DialogsContainer from "./components/MAIN_DISPLAY/Dialogs/DialogsContainer.jsx";
import Users from "./components/MAIN_DISPLAY/Users/UsersContainer.jsx"
import Friends from "./components/MAIN_DISPLAY/Friends/Friends.jsx"
import {Route, withRouter} from "react-router-dom";
import Login from "./components/MAIN_DISPLAY/Login/Login";
import SettingsContainer from "./components/MAIN_DISPLAY/Settings/SettingsContainer";
import MusicContainer from "./components/MAIN_DISPLAY/Music/MusicContainer";
import { connect } from "react-redux";
import {initializeApp} from "./redux/appReducer"
import Preloader from "./components/common/Preloaders/Preloader";


class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp()
  }
  render(){
    if(!this.props.initialized) return <Preloader/>
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={()=><ProfileContainer />} />
          <Route path='/friends' render={()=><Friends />} />
          <Route path='/users' render={()=><Users/>} />
          <Route path='/dialogs'render={()=><DialogsContainer />} />
          <Route path='/music' render={()=><MusicContainer />} />
          <Route path='/settings'render={()=><SettingsContainer/>} />
          <Route path='/login'render={()=><Login/>} />
        </div>
      </div>
  );}
}

const mapStateToProps=(state)=>({
  initialized:state.app.initialized
})

export default withRouter (connect(mapStateToProps, {initializeApp})(App));
