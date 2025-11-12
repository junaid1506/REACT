import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function EnterTodo({ todoItems, setTodoItems }) {
  let [enterName, setEnterName] = useState("");
  let [enterDate, setEnterDate] = useState("");

  const handelSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    let newTodo = [
      ...todoItems,
      {
        todoName: enterName,
        todoDate: enterDate,
      },
    ];
    setTodoItems(newTodo);
    setEnterDate("");
    setEnterName("");
  };

  return (
    <>
      <form onSubmit={handelSubmit} className="row">
        <div className="col-4">
          <input
            type="text"
            value={enterName}
            placeholder="Enter todo here"
            onChange={(e) => {
              setEnterName(e.target.value);
            }}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={enterDate}
            onChange={(e) => {
              setEnterDate(e.target.value);
            }}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            <IoAddCircleOutline />
          </button>
        </div>
      </form>
    </>
  );
}
export default EnterTodo;
