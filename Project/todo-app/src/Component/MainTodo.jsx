import { MdDelete } from "react-icons/md";

function MainTodo({ todoName, todoDate, handleDelete }) {
  return (
    <div className="row">
      <div className="col-4">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          onClick={() => handleDelete(todoName)}
          type="button"
          className="btn btn-danger"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default MainTodo;
