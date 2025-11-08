const Items = ({ singleItem, clickedHandle, bought }) => {
  return (
    <li className={`list-group-item  flex ${bought ? 'active' : ''}`}>
      {singleItem}
      <button type="button" className="btn btn-success" onClick={clickedHandle}>
      {bought ? 'Bought' : "Buy"}
      </button>
    </li>
  );
};
export default Items;