import React from "react";
import s from "./SiteBar.module.css";
import SiteBarItem from "./SiteberItem/SiteBarItem"

const SiteBar =  props => {
  let siteBarElements = props.SiteBar.sbf.map(f => <SiteBarItem name={f.name} src={f.src} />);
  return (
    <div className={s.siteBar}>
      {siteBarElements}
    </div>
  );
};

export default SiteBar;
