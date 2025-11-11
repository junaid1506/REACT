import MainTodo from "./MainTodo";

const TodoMaping = ({todoItems ,setTodoItems }) => {
  const deleteTodo = (todoName)=>{
    const newTodo = todoItems.filter(item => item.todoName !== todoName);
    setTodoItems(newTodo)
  }
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

export default TodoMaping