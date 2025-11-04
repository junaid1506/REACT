import MainTodo from "./MainTodo";

const TodoMaping = ({todoItems}) => {
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

export default TodoMaping