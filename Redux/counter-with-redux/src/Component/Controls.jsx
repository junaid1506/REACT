import React from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const handleIncriment = () => {
    dispatch({ type: "INCRIMENT" });
  };
  const handleDecriment = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button onClick={handleIncriment} type="button" class="btn btn-primary">
        +1
      </button>
      <button onClick={handleDecriment} type="button" class="btn btn-success">
        -1
      </button>
    </div>
  );
};

export default Controls;
