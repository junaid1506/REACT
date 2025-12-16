import { useDispatch, useSelector } from "react-redux";
import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";

const Bag = () => {
  const bagIds = useSelector((store) => store.bag);
  const allItems = useSelector((store) => store.items);
  const itemsInBag = allItems.filter((item) => {
    const itemIndex = bagIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {itemsInBag.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <div className="bag-summary">
            <BagSummary itemsInB={itemsInBag} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
