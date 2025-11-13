import AppName from "./Component/AppName";
import EnterTodo from "./Component/EnterTodo";
import "./App.css";
import TodoMaping from "./Component/TodoMaping";
import { useState } from "react";
import WelcomeMsg from "./Component/WelcomeMsg";
import { TodoItemsContext } from "./Store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  return (
    <>  
      <TodoItemsContext.Provider>
      <center className="todocontainer">
        <AppName />
        <div className="center">
          <EnterTodo setTodoItems={setTodoItems} todoItems={todoItems} />
          {todoItems.length > 0 ? "" : <WelcomeMsg />}
          <TodoMaping todoItems={todoItems} setTodoItems={setTodoItems} />
        </div>
      </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
