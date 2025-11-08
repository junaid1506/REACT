import "./App.css";
import React, { useState } from "react";
import ErrorMsg from "./Component/ErrorMsg";
import AllItems from "./Component/AllItems";
import Container from "./Component/Container";
import FoodInput from "./Component/FoodInput";

function App() {
  let  [foodItems, setFoodItems] = useState([
    "Chicken",
    "Vegetables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
    "Fish",
  ]);
  const handleOnChange = (e) => {
    textState(e.target.value);
  };
  const myState = useState();
  let textValue = myState[0];
  let textState = myState[1];

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <ErrorMsg items={foodItems} />
        <FoodInput handleOnChange={handleOnChange} />
        <AllItems items={foodItems} />
      </Container>

      {/* <Container>
      <h1 className="heading">Healthy Foods more</h1>
        <ul className="list-group">
        {foodItems2.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>,,,,,,,,,,,,,,,,,,,,,
    </Container> */}
    </>
  );

  // Short hand is <></> of <React.Fragment> </React.Fragment>
}

export default App;
