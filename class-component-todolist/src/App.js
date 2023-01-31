// function App() {
//   return (
//     <div >
//     TO DO LIST
//     </div>
//   );
// }
// export default App;
import React, { Component }from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import List from "./component/List";
import "./App.css"
class App extends Component{
  state={todolist:[]}
  addToDoList=(listObj)=>{
    const {todolist} =this.state
    const newtodolist=[listObj,...todolist]
    this.setState({todolist:newtodolist})
  }
  updateTodo=(id,done)=>{
     const {todolist}=this.state
    const updatetodolist=todolist.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todolist:updatetodolist})
  }
  deleteTodo=(id)=>{
    const {todolist}=this.state
   const newtodolist= todolist.filter((todoObj)=>{
      return todoObj.id!==id
    })
    this.setState({todolist:newtodolist})
  }
  allDone=(done)=>{
    const {todolist}=this.state
    const newTodolist= todolist.map((todoObj)=>{
       return {...todoObj,done}
     })
      this.setState({todolist:newTodolist})
  }
  clearAllDone=()=>{
    const {todolist}=this.state
    const newTodolist= todolist.filter((todoObj)=>{
       return !todoObj.done
     })
      this.setState({todolist:newTodolist})
  }
 
  render(){
    const {todolist}=this.state
    return(
      <div className="div-class">
       <Header addToDoList={this.addToDoList}/>
       <List todolist={todolist} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
       <Footer todolist={todolist} allDone={this.allDone} clearAllDone={this.clearAllDone}/>
      </div>
    )
  }
}
export default App;