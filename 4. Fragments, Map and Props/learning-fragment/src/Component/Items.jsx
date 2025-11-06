const Items = ({ singleItem }) => {
  const clickedHandle = () => {
    alert(`${singleItem} is add to the beg.`);
  };

  return (
    <li className="list-group-item  flex">
      {singleItem}
      <button type="button" className="btn btn-info" onClick={clickedHandle}>
        Add +{" "}
      </button>
    </li>
  );
};
export default Items;
