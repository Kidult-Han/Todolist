import Header from "./conponents/Header"
import List from "./conponents/List"
import Footer from "./conponents/Footer"
import { useState } from "react"
import "./App.css"
function App() {
const [contentArr,setArr]=useState([])
  return (
    <div className="app">
     <Header add={setArr} arrQk={contentArr}/>
     <List show={contentArr} deleteItem={setArr}/>
     <Footer total={contentArr}/>
    </div>
  );
}

export default App;
