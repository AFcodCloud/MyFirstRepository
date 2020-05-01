import React from 'react';
import s from "./Music.module.css"
import { useState } from 'react';


const Music =(props)=>{
    return (
      <div>
       <MyPaginator items={arr}/>
      </div>
      
            );
};


let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
           31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,
          58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,
          86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]


let MyPaginator = ({items,totalItemsCount=100, pageSize=6, portionSize=10})=>{
//количество страниц
let pages =[];
let CountPages=Math.ceil(totalItemsCount/pageSize)
for(let i=1; i<=CountPages;i++){pages.push(i)}
let [currentPage, setCurrentPage]=useState(1);
//порции
let portionCount=Math.ceil(CountPages/portionSize)
let [NumberPortion,setNumberPortion]=useState(2)
let leftPortionNumber=(NumberPortion-1)*portionSize+1;
let rightPortionNumber=NumberPortion*portionSize;
//элементы
let elements=[...items].filter(e=>e<=(currentPage*pageSize)&&e>=((currentPage-1)*pageSize))
return(
  <div>
    {NumberPortion>1&&<button onClick={()=>{setNumberPortion(NumberPortion-1)}}>prev</button>}
    {pages
    .filter(p=>p>=leftPortionNumber&&p<=rightPortionNumber)
    .map(p=>{return <span className={currentPage==p&&s.selectPage} onClick={()=>setCurrentPage(p)}>{p}</span>})}
    {NumberPortion<portionCount&& <button onClick={()=>{setNumberPortion(NumberPortion+1)}}>next</button>}
    <div>
    {elements}
    </div>
  </div>
)
}


export default Music;