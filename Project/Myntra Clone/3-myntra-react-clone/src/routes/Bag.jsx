import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";

const Bag = () => {
  
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <BagItem item={item} />
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
