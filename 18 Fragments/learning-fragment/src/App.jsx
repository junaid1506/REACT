import "./App.css";
import React from "react";
import ErrorMsg from "./Component/ErrorMsg";
import AllItems from "./Component/AllItems";

function App() {
  let foodItems = [
    "Chicken",
    "Vegetables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
    "Fish",
  ];
  // let foodItems = []
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ErrorMsg items= {foodItems}/>
      <AllItems items= {foodItems}/>
    </React.Fragment>
  );

  // Short hand is <></> of <React.Fragment> </React.Fragment>
}

export default App;
