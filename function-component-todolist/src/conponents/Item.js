

function Item({id,date,time,content,deleteItem}) {
  function deleteCt(){
    if(window.confirm("确定删除吗？")){
      deleteItem((prev)=>{return prev.filter(item=>item.id!==id)})
    }
       
      }
    

    return (
      <div>
        <div className="item">
      <p>{date}</p>
     <p>{time}</p>
     <p>{content}</p>
     <button className="remove" onClick={deleteCt}>删除</button>
     </div>
      </div>
    );
  }
  
  export default Item;
  