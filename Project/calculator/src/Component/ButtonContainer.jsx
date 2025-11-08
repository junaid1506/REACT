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

          if (["+", "−", "×", "%", "÷", "()"].includes(btn)) {
            btnClass = "operator";
          } else if (btn === "C") {
            btnClass = "clear";
          } else if (btn === "=") {
            btnClass = "equal";
          }

          console.log(btnClass);
          return <SigleButton btnClass={btnClass} key={btn} btn={btn} />;
        })}
      </div>
    </>
  );
};

export default ButtonContainer;
