import AppName from "./Component/AppName";
import EnterTodo from "./Component/EnterTodo";
import "./App.css";
import TodoMaping from "./Component/TodoMaping";

function App() {
  const todoItems = [
    {
      todoName: "Buy Milk",
      todoDate: "04/10/2023",
    },
    {
      todoName: "Go to College",
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
    {
      todoName: "Finish Client Project",
      todoDate: "06/10/2023",
    },
    {
      todoName: "Pay Electricity Bill",
      todoDate: "07/10/2023",
    },
    {
      todoName: "Read 20 Pages of Book",
      todoDate: "07/10/2023",
    },
    {
      todoName: "Meet College Friends",
      todoDate: "08/10/2023",
    },
    {
      todoName: "Clean the Room",
      todoDate: "08/10/2023",
    },
  ];

  return (
    <>
      <center className="todocontainer">
        <AppName />
        <div className="center">
          <EnterTodo />
          <TodoMaping todoItems={todoItems}/>
        </div>
      </center>
    </>
  );
}

export default App;
