import React from "react";
import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="input-group mb-3">
        <input
          onChange={handleOnChange}
          type="text"
          className="form-control"
          placeholder="Recipient’s username"
          aria-label="Recipient’s username"
          aria-describedby="basic-addon2"
        />
        <button className="input-group-text" id="basic-addon2">
          Search 🔎{" "}
        </button>
      </div>
      {/* <input classNameName={styles.input} type="text" placeholder='Enter' /> */}
    </>
  );
};

export default FoodInput;
