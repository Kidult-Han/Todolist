import React, { Component }from "react";
import Item from "../Item";
import "./index.css"
class List extends Component{
  render(){
    const {todolist,updateTodo,deleteTodo}=this.props
    return(
      <div>
        <br/>
        <p>计划表</p>
        <ul>
         {
         todolist.map((todolist)=>{
          return  <Item className="itemclass" key={todolist.id} {...todolist} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
         })
         }
         
          </ul>
      </div>
    )
  }
}
export default List ;