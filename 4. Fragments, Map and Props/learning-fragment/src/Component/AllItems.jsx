import { useState } from "react";
import Items from "./Items";

const AllItems = ({ items }) => {
  let [buyItem, setBuyItem] = useState([]);
  const handleActive = (item, e) => {
    setBuyItem([...buyItem, item]);
  };

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            singleItem={item}
            bought={buyItem.includes(item)}
            clickedHandle={(e) => handleActive(item, e)}
          />
        ))}
      </ul>
    </>
  );
};
export default AllItems;
