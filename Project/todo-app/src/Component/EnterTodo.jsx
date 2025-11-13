import { useRef, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function EnterTodo({ todoItems, setTodoItems }) {
  // let [enterName, setEnterName] = useState("");
  // let [enterDate, setEnterDate] = useState("");  
  let enterNameElement =  useRef()
  let enterDateElement = useRef()
  const handelSubmit = (e) => {
    e.preventDefault();
    let newTodo = [
      ...todoItems,
      {
        todoName: enterNameElement.current.value,
        todoDate: enterDateElement.current.value,
      },
    ];
    setTodoItems(newTodo);
    enterNameElement.current.value = ''
    enterDateElement.current.value = ''
  };

  return (
    <>
      <form onSubmit={handelSubmit} className="row">
        <div className="col-4">
          <input
            ref={enterNameElement}
            type="text"
            // value={enterName}
            placeholder="Enter todo here"
            // onChange={(e) => {
            //   setEnterName(e.target.value);
            // }}
          />
        </div>
        <div className="col-4">
          <input
          ref={enterDateElement}
            type="date"
            // value={enterDate}
            // onChange={(e) => {
            //   setEnterDate(e.target.value);
            // }}
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
