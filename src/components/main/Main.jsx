import React from 'react'
import Card from './Card'
import "./Main.scss"
import {data} from "..//..//helper/data"

const Main = () => {
    
  return (
    <div className='divMain'>
         {/* 1 yol {data.map((item)=> <Card item={item}/>)} */}
         {data.map((item)=>{
            //console.log(item);
            return(
                <Card item = {item} key={item.id}/> 
            )
         })}
    </div>
  )
}

export default Main