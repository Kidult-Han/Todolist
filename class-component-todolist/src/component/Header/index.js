import React, { Component }from "react";
import { Button } from 'antd';
import { nanoid } from "nanoid";
import "./index.css"

class Header extends Component{
  state={name:"",date:"",time:""}
  inputCode =(event)=> {
    // console.log(event.target.value)
    if(event.keyCode !==13)
    return
    // console.log(event.target.value)
    if (event.target.value===""){
      alert("输入不能为空")
      return
    }
    const listObj={id:nanoid(),name:event.target.value,done:false}
    this.props.addToDoList(listObj)
    event.target.value=""
  }
  
  Abcd=(event)=>{
    this.setState({
      name:event.target.value
  })}

 addDate=(e)=>{
  this.setState({
    date:e.target.value,
})
 }
 addTime=(e)=>{
  this.setState({
    time:e.target.value,
})
 }
  getInput=()=>{
    if (this.state.name===""){
      alert("输入不能为空")
      return}
    const{date,time,name}=this.state
    const listObj={id:nanoid(),date:date,time:time,name:name,done:false}
    console.log(listObj)
    this.props.addToDoList(listObj)
    this.setState({
      name:"",
      date:"",
      time:""
  })
      } 

  render(){
    
    return(
      
      <div>
        <p>日期</p>
        <input type="date" value={this.state.date} onChange={this.addDate}></input>
        <p>时间</p>
        <input type="time" value={this.state.time} onChange={this.addTime}></input>
        <p>输入计划</p>
        <input  className="headerinput" value={this.state.name} onKeyUp={this.inputCode} onChange={this.Abcd} type="text" placeholder="请输入计划，按回车或确定键确认"></input>
        <Button className="headerbutton" type="primary" name="确定" onClick={this.getInput}>确定</Button>
      </div>
    )
  }
}
export default Header;