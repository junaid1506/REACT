import React from "react";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const { counterVal } = useSelector((store) => store.counter);
  const varialbe = useSelector((store) => store.privacy);
  console.log(varialbe);
  return <p className="lead mb-4">Counter current Value : {counterVal}</p>;
};

export default CounterDisplay;
