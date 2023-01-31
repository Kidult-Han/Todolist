import React, { Component }from "react";
class Footer extends Component{
checkAll=(event)=>{
  this.props.allDone(event.target.checked)
}
deleteAllDone=()=>{
  this.props.clearAllDone()
}

  render(){
    const {todolist} =this.props
    const total=todolist.length
    const donetotal=todolist.reduce((a,b)=>{return a+(b.done?1:0)},0)

    return(
      <div>
        <label>
          <input type={"checkbox"} onChange={this.checkAll} checked={donetotal===total&&total!==0?true:false}/>
        </label>
        <span>
          <span>已完成{donetotal}</span>全部{total}
        </span>
        <button onClick={this.deleteAllDone}>清除已完成</button>
      </div>
    )
  }
}
export default Footer;