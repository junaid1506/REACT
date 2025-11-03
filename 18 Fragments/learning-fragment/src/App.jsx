import "./App.css";
import React from "react";

function App() {
  let foodItems = ['Daal','Green Vegetables','Roti','Salad','Milk', 'Ghee']
  return (
    <React.Fragment>
    <h1>Healthy Food</h1>
      <ul className="list-group">
        {
          foodItems.map(item=>(
            <li class="list-group-item">{item}</li>
          ))
        }
       
      </ul>
  </React.Fragment>
  );

  // Short hand is <></> of <React.Fragment> </React.Fragment>
}

export default App;
