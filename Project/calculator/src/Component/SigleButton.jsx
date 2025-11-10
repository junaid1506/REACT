// import React from 'react'
import styles from "./SingleButton.module.css";
const SigleButton = ({ btn, btnClass, clickHandler }) => {
  return (
    <>
      <button onClick={clickHandler} className={`${styles.button} ${styles[btnClass]}`}>{btn}</button>
      {/* {console.log(btnClass)} */}
    </>
  );
};

export default SigleButton;
