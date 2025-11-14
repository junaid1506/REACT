  import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../Store/todo-items-store";
  
  function MainTodo({ todoName, todoDate  }) {

    const {deleteTodo}=useContext(TodoItemsContext)
    return (
      <div className="row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button onClick={()=>deleteTodo(todoName)} type="button" className="btn btn-danger">
          <MdDelete />

          </button>
        </div>
      </div>
    );
  }
  export default MainTodo;
