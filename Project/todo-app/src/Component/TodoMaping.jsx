import { useContext } from "react";
import MainTodo from "./MainTodo";
import { TodoItemsContext } from "../Store/todo-items-store";

const TodoMaping = ({ deleteTodo }) => {

  const todoItems = useContext(TodoItemsContext)

  return (
    <>
      {todoItems.map((todo) => (
        <>
          <MainTodo
            key={todo.todoName}
            todoName={todo.todoName}
            todoDate={todo.todoDate}
            handleDelete={deleteTodo}
          />
        </>
      ))}
    </>
  );
};

export default TodoMaping;
