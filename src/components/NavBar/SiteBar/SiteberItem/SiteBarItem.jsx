import React from "react";
import s from "./SiteBarItem.module.css";

const SiteBarItem = props => {
  return (
     <div className={s.siteBarItem}>
        <div className={s.siteBarIMG}>
          <img src={props.src}></img>
        </div>
  <div className={s.name}>{props.name}</div>
      </div>
  );
};

export default SiteBarItem;
