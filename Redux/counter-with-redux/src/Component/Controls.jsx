import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();
  const handleIncriment = () => {
    dispatch({ type: "INCRIMENT" });
  };
  const handleDecriment = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: Number(inputElement.current.value),
      },
    });
    inputElement.current.value = "";
  };
  const handleSub = () => {
    dispatch({
      type: "SUB",
      payload: {
        num: Number(inputElement.current.value),
      },
    });
    inputElement.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({
      type: "HANDLEPRIVACY",
    });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncriment}
          type="button"
          className="btn btn-primary"
        >
          +1
        </button>
        <button
          onClick={handleDecriment}
          type="button"
          className="btn btn-success"
        >
          -1
        </button>
        <button
          onClick={handlePrivacy}
          type="button"
          className="btn btn-warning"
        >
          Privacy
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center margin10">
        <input
          type="text"
          placeholder="Enter number"
          className="inout-number"
          ref={inputElement}
        />
        <button onClick={handleAdd} type="button" className="btn btn-info">
          Add
        </button>
        <button onClick={handleSub} type="button" className="btn btn-danger">
          Sub
        </button>
      </div>
    </>
  );
};

export default Controls;
