import React from 'react';
import s from "./Header.module.css"
import { NavLink } from 'react-router-dom';

const Header =(props)=>{
    return (
        <header className={s.header}>
        <img
          src="https://www.meme-arsenal.com/memes/ce44518b88bd4595d10ea075ef97fd70.jpg"
          alt="logo" 
        />
        <div className={s.authUser}>
          {props.isAuth? <div>{props.login} <button className={s.logOut} onClick={props.getLogOut}>Log Out</button> </div>:<NavLink to='/login'>Login</NavLink>}
        </div>
      </header>
    );
};

export default Header;