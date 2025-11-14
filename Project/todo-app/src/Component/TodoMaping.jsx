import { useContext } from "react";
import MainTodo from "./MainTodo";
import { TodoItemsContext } from "../Store/todo-items-store";

const TodoMaping = () => {

  const {todoItems} = useContext(TodoItemsContext)

  return (
    <>
      {todoItems.map((todo) => (
        <>
          <MainTodo
            key={todo.todoName}
            todoName={todo.todoName}
            todoDate={todo.todoDate}
          />
        </>
      ))}
    </>
  );
};

export default TodoMaping;
