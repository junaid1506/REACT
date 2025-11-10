import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Component/ButtonContainer";
import Display from "./Component/Display";

function App() {
  let [display, setDisplay] = useState("");

  let clickHandler = (e, btn) => {
    if (btn === "C") {
      setDisplay("");
    } else if (btn === "=") {
      let expression = display
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/%/g, "/100"); // convert % to /100
      let result = eval(expression);
      setDisplay(result.toString());
    } else {
      setDisplay(display + btn);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display display={display} />
        <ButtonContainer clickHandler={clickHandler} />
      </div>
    </>
  );
}

export default App;
