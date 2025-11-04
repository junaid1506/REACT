function MainTodo({ todoName, todoDate }) {
  return (
    <div className="row">
      <div className="col-4">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default MainTodo;
