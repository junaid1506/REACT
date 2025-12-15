import { useSelector } from "react-redux";
import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";

const Bag = () => {
  const bagIds = useSelector((store) => store.bag);
  const allItems = useSelector((store) => store.items);
  const itemsInBag = bagIds
    .map((id) => allItems.find((item) => item.id === id))
    .filter(Boolean);
  console.log(itemsInBag);

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <BagItem item={itemsInBag} />
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
