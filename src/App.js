import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";

import Users from "./components/MAIN_DISPLAY/Users/UsersContainer.jsx"
import Friends from "./components/MAIN_DISPLAY/Friends/Friends.jsx"
import {Route, withRouter} from "react-router-dom";
import Login from "./components/MAIN_DISPLAY/Login/Login";
import SettingsContainer from "./components/MAIN_DISPLAY/Settings/SettingsContainer";

import { connect } from "react-redux";
import {initializeApp} from "./redux/appReducer"
import Preloader from "./components/common/Preloaders/Preloader";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {withSuspens} from "./components/HOC/SuspensWrapper";

//React lazy ленивая загрузка страницы.
//import ProfileContainer from "./components/MAIN_DISPLAY/Profile/ProfileContainer";
const ProfileContainer = React.lazy(()=>import('./components/MAIN_DISPLAY/Profile/ProfileContainer'))
//import MusicContainer from "./components/MAIN_DISPLAY/Music/MusicContainer";
const MusicContainer = React.lazy(()=> import('./components/MAIN_DISPLAY/Music/MusicContainer'))
//import DialogsContainer from "./components/MAIN_DISPLAY/Dialogs/DialogsContainer.jsx";
const DialogsContainer = React.lazy(() => import('./components/MAIN_DISPLAY/Dialogs/DialogsContainer.jsx'));

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
          <Route path='/profile/:userId?' render={withSuspens(ProfileContainer)} />
          <Route path='/friends' render={()=><Friends />} />
          <Route path='/users' render={()=><Users/>} />
          <Route path='/dialogs'render={withSuspens(DialogsContainer)}/>    
          <Route path='/music' render={withSuspens(MusicContainer)} />
          <Route path='/settings'render={()=><SettingsContainer/>} />
          <Route path='/login'render={()=><Login/>} />
        </div>
      </div>
  );}
}



const mapStateToProps=(state)=>({
  initialized:state.app.initialized
})

 const AppContainer=withRouter (connect(mapStateToProps, {initializeApp})(App));


 const MainAPP = (props)=>{
  return (
  <BrowserRouter>
  <Provider store={store}>
    <AppContainer />
    </Provider>
  </BrowserRouter>)
}

export default MainAPP;