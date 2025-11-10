import AppName from "./Component/AppName";
import EnterTodo from "./Component/EnterTodo";
import "./App.css";
import TodoMaping from "./Component/TodoMaping";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      todoName: "Buy Milk",
      todoDate: "04/10/2023",
    },
    {
      todoName: "Go to School",
      todoDate: "04/10/2023",
    },
    {
      todoName: "Complete React Assignment",
      todoDate: "05/10/2023",
    },
    {
      todoName: "Call Mom",
      todoDate: "05/10/2023",
    },
    {
      todoName: "Go to Gym",
      todoDate: "06/10/2023",
    },
  ]);

  return (
    <>
      <center className="todocontainer">
        <AppName />
        <div className="center">
          <EnterTodo />
          <TodoMaping todoItems={todoItems} />
        </div>
      </center>
    </>
  );
}

export default App;
