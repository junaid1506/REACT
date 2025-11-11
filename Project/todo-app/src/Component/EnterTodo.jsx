import { useState } from "react";

function EnterTodo({enterDate,enterName}){
  return(
    <>
     <div className="row">
          <div className="col-4">
            <input type="text" placeholder="Enter todo here" />
          </div>
          <div className="col-4"><input type="date" /></div>
          <div className="col-2">
            <button type="button" class="btn btn-success">Add</button>
          </div>
        </div>
    </>
  )
}
export default EnterTodo;