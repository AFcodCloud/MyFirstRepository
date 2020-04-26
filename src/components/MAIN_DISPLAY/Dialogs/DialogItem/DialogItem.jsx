import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = props => {
  let x = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={x} activeClassName={s.activeNavLink} className={s.navLink}>
        {props.name}{" "}
      </NavLink>
    </div>
  );
};


export default DialogItem;
