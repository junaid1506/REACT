const Items = ({singleItem}) => {
  return (
    <li className="list-group-item  flex">
      {singleItem}
      <button type="button" class="btn btn-info">Add </button>
    </li>
  );
};
export default Items;
