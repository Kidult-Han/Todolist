import Item from "./Item"
// import {nanoid } from "nanoid"
function List({show,deleteItem}) {
    return (
      <div className="list">
   {show.map((abc) => {
        const { content, date, time, id } = abc;
        return (
          <Item
            key={id}
            id={id}
            content={content}
            date={date}
            time={time}
            deleteItem={deleteItem}
          />
        );
      })}
      </div>
      )
  }
  
  export default List;
  