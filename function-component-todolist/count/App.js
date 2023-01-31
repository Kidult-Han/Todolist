import { useEffect, useState } from "react";

function App() {
  const [Count,setCount]=useState(20)
  function  addNum() {
    setCount(Count+2);
  }
  function  deNum() {
   setCount(Count-2);
  }
  function timeAdd() {
    setTimeout(
      ()=>{setCount((prevState)=>{return prevState+2;})},2000
    )
   }
   useEffect(()=>{
    console.log("aaa")
   })
   console.log("aaa")
  return (
    <div>
     <p>{Count}</p>
     <button onClick={addNum}>增加</button>
     <button onClick={deNum}>减少</button>
     <button onClick={timeAdd}>间隔增加</button>
    </div>
  );
}

export default App;
