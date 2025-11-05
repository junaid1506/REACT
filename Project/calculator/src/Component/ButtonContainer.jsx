// import React from 'react'
import styles from "./ButtonContainer.module.css";
import SigleButton from "./SigleButton";

const ButtonContainer = ({ calculatorButtons }) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        {calculatorButtons.map((btn) => {
          // Example: decide class dynamically
          let btnClass = "button";

          if (["+", "-", "*", "/"].includes(btn)) {
            btnClass = "operatorButton";
          } else if (btn === "C") {
            btnClass = "clearButton";
          } else if (btn === "=") {
            btnClass = "equalButton";
          }

          console.log(btnClass)
         return <SigleButton btnClass={btnClass} key={btn} btn={btn} />;
        })}
      </div>
    </>
  );
};

export default ButtonContainer;
