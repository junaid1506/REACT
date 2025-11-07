import "./App.css";
import React from "react";
import ErrorMsg from "./Component/ErrorMsg";
import AllItems from "./Component/AllItems";
import Container from "./Component/Container";
import FoodInput from "./Component/FoodInput";

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
//   let foodItems2 = [
//   // 🥣 Breakfast Items
//   "Poha",
//   "Upma",
//   "Idli",
//   "Dosa",
//   "Paratha",
//   "Omelette",
//   "Boiled Eggs",
//   "Bread Butter",
//   "Cornflakes",
//   "Pancakes",
//   "Tea",
//   "Coffee",
//   "Milk",
//   "Green Tea",
//   "Fruit Juice",

//   // 🍛 Lunch/Dinner Items
//   "Rice",
//   "Pulao",
//   "Biryani",
//   "Khichdi",
//   "Dal Tadka",
//   "Rajma",
//   "Chole",
//   "Paneer Butter Masala",
//   "Shahi Paneer",
//   "Palak Paneer",
//   "Mixed Vegetables",
//   "Bhindi Fry",
//   "Aloo Gobi",
//   "Matar Paneer",
//   "Baingan Bharta",
//   "Roti",
//   "Naan",
//   "Tandoori Roti",
//   "Jeera Rice",
//   "Curd",
//   "Salad",

//   // 🍗 Non-Veg Items
//   "Chicken Curry",
//   "Chicken Biryani",
//   "Butter Chicken",
//   "Grilled Chicken",
//   "Egg Curry",
//   "Fish Curry",
//   "Fried Fish",
//   "Mutton Curry",
//   "Kebab",
//   "Prawns Fry",

//   // 🥗 Healthy Options
//   "Sprouts",
//   "Oats",
//   "Brown Rice",
//   "Quinoa",
//   "Vegetable Soup",
//   "Fruit Bowl",
//   "Greek Yogurt",
//   "Smoothie",
//   "Boiled Vegetables",

//   // 🍞 Snacks
//   "Samosa",
//   "Pakora",
//   "Sandwich",
//   "Burger",
//   "Pizza",
//   "French Fries",
//   "Chips",
//   "Bhel Puri",
//   "Pani Puri",
//   "Sev Puri",
//   "Pav Bhaji",

//   // 🍰 Desserts
//   "Ice Cream",
//   "Gulab Jamun",
//   "Rasgulla",
//   "Kheer",
//   "Halwa",
//   "Brownie",
//   "Cake",
//   "Custard",

//   // 🧈 Other Essentials
//   "Ghee",
//   "Butter",
//   "Cheese",
//   "Yogurt",
//   "Pickle",
//   "Honey",
//   "Salt",
//   "Spices",
// ];

  // let foodItems = []

   const handleOnChange = (e) => {
    console.log(e.target.value);
  };



  return (
    <>
    <Container>
      <h1 className="heading">Healthy Food</h1>
      <ErrorMsg items={foodItems} />
      <FoodInput handleOnChange={handleOnChange}/>
      <AllItems items={foodItems} />
    </Container>

    {/* <Container>
      <h1 className="heading">Healthy Foods more</h1>
        <ul className="list-group">
        {foodItems2.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </Container> */}
    </>
  );

  // Short hand is <></> of <React.Fragment> </React.Fragment>
}

export default App;
