import Items from "./Items";

const AllItems = ({items}) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
         <Items key={item} singleItem = {item}/>
        ))}
      </ul>
    </>
  );
};
export default AllItems;