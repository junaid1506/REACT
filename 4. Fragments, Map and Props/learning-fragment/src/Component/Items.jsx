const Items = ({ singleItem, clickedHandle }) => {
  return (
    <li className="list-group-item  flex">
      {singleItem}
      <button type="button" className="btn btn-info" onClick={clickedHandle}>
        Buy
      </button>
    </li>
  );
};
export default Items;