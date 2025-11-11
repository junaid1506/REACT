import MainTodo from "./MainTodo";

const TodoMaping = ({todoItems, setTodoItems }) => {
  return (
    <>
      {todoItems.map((todo) => (
        <>
          <MainTodo
            key={Math.random()} 
            todoName={todo.todoName}
            todoDate={todo.todoDate}
            handleDelete={()=>{
              let newTodo = todoItems.filter(()=>todo)
              setTodoItems(newTodo)
            }}
          />
        </>
      ))}
    </>
  );
};

export default TodoMaping