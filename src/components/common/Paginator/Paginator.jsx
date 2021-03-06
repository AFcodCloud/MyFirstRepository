 import React, { useState } from "react"
 import s from "./Paginator.module.css"

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10})=>{
    //страницы
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {pages.push(i)}
    //порции
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber]=useState(1);
    let leftPortionNumber = (portionNumber-1)*portionSize+1;
    let rightPortionNumber = portionNumber*portionSize;

    return(
    <div className={s.container}>
     { portionNumber>1 && <button className={s.nav} onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>}
      <div className={s.pagesNav}>
      {pages
      .filter(p=>p>=leftPortionNumber&&p<=rightPortionNumber)
      .map(p => {
        return (
          <span
            className={s.page +" "+ (currentPage == p && s.selectedPage)}
            onClick={e => {onPageChanged(p);}}>
            {p}
          </span>);})} 
        </div>
      { portionCount>portionNumber && <button className={s.nav} onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>}
      </div>)
}

export default Paginator;