import Items from "./Items";

const AllItems = ({ items, isActive, setIsActive }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            singleItem={item}
            clickedHandle={() => {
              // alert(`${item} is bought.`)
              setIsActive(isActive ? "" : "active");
            }}
            isActive={isActive}
          />
        ))}
      </ul>
    </>
  );
};
export default AllItems;
