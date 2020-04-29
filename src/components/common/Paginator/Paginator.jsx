 import React from "react"
 import s from "./Paginator.module.css"

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged})=>{
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {pages.push(i)}
    
    return(
    <div>
      <div className={s.pagesNav}>
      {pages.map(p => {
        return (
          <span
            className={currentPage == p && s.selectedPage}
            onClick={e => {onPageChanged(p);}}>
            {p}
          </span>);})} 
        </div>
      </div>)
}

export default Paginator;