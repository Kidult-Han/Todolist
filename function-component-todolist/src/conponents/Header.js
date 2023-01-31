import { useState } from "react";
import{ nanoid } from "nanoid"

function Header({add,arrQk}) {
const [content,setContent] =useState("")
function changeContent(e){
  setContent(e.target.value)

}
const [date,setDate] =useState("")
function changeDate(e){
    setDate(e.target.value)
   }
   const [time,setTime] =useState("")
   function changeTime(e){
  setTime(e.target.value)
 }
//  console.log(date,time,content)
 function addContent(){
  add(function(prevDate)
  {return [...prevDate,{ id:nanoid(),date,time,content}]
  
}) 
  
  };
 
    return (
      <div>
        <h1>记事本</h1>
        <p>日期</p>
        <input type="date" value={date} onChange={changeDate}/>
        <p>时间</p>
        <input type="time" value={time} onChange={changeTime}/>
        <p>记事</p>
        <input type="text" value={content} onChange={changeContent}/>
        <button className="adda" onClick={addContent}>新增</button>
      </div>
    );
  }
  
  export default  Header;
  