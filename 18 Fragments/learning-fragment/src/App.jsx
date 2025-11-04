import "./App.css";
import React from "react";

function App() {
  let foodItems = ['Daal','Green Vegetables','Roti','Salad','Milk', 'Ghee', 'Fish']
  // let foodItems = []
  return (
    <React.Fragment>
    <h1>Healthy Food</h1>
    {foodItems.length === 0 ? <h3>I am still hungery</h3> : null}
      <ul className="list-group">
        {
          foodItems.map(item=>(
            <li key={item} className="list-group-item">{item}</li>
          ))
        }
      </ul>
  </React.Fragment>
  );                                                                                                                                                                                                                                                                                  

  // Short hand is <></> of <React.Fragment> </React.Fragment>
}

export default App;