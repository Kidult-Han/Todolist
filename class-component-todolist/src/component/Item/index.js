import React, { Component }from "react";
import "./index.css"
class Item extends Component{
 
  handleCheck=(id)=>{
    return(event)=>{
  this.props.updateTodo(id,event.target.checked)
    }
  }
  handleDelete=(id)=>{
    if(window.confirm("确定删除吗？")){
      this.props.deleteTodo(id)
    }
   
    
  }

  render(){
    const{id,date,time,name,done}=this.props
    return(
      <div>
      <label className="labelclass">
            <input onChange={this.handleCheck(id)} type="checkbox" checked={done}/>
            <span>
            {`${date} ${time}`} 
            {name}
            </span>
          </label>
          <button onClick={()=>this.handleDelete(id)}>删除</button>
      </div>
    )
  }
}
export default Item ;