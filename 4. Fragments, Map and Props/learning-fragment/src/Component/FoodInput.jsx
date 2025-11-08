import React from "react";
import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnKeyDown}) => {
 
  return (
    <>
      <div className="input-group mb-3">
        <input
          onKeyDown={handleOnKeyDown}
          type="text"
          className="form-control"
          placeholder="Enter Food Item Here"
          aria-label="Enter Food Item Here"
          aria-describedby="basic-addon2"
        />
        
      </div>
      {/* <input classNameName={styles.input} type="text" placeholder='Enter' /> */}
    </>
  );
};

export default FoodInput;
