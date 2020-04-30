import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import siteBarReducer from "./siteBarReducer";
import usersReducer from "./usersReducer"
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";
import friendsReducer from "./friendsReducer";
import { compose } from "redux";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    SiteBar:siteBarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer,
    form:formReducer,
    friends:friendsReducer
});

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
  ));
/* 
let store = createStore(reducers, applyMiddleware(thunkMiddleware)); */
export default store;


window.store=store;  