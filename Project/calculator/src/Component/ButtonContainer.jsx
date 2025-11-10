// import React from 'react'
import styles from "./ButtonContainer.module.css";
import SigleButton from "./SigleButton";

const ButtonContainer = ({ clickHandler }) => {

    const calculatorButtons = [
  "C", "()", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "−",
  "1", "2", "3", "+",
  "0", ".", "="
];


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

          // console.log(btnClass);
          return <SigleButton clickHandler={(e)=>clickHandler(e, btn)}  btnClass={btnClass} key={btn} btn={btn} />;
        })}
      </div>
    </>
  );
};

export default ButtonContainer;
