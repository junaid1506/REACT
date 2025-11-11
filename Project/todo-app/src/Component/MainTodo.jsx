function MainTodo({ todoName, todoDate ,handleDelete }) {
  return (
    <div className="row">
      <div className="col-4">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button onClick={handleDelete} type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default MainTodo;
