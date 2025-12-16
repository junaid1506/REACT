import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagId = useSelector((store) => store.bag);
  const elementFound = bagId.indexOf(item.id) >= 0;

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button
          onClick={() => {
            dispatch(bagActions.removeFromBag(item.id));
          }}
          type="button"
          className="btn btn-danger btn-add-bag"
        >
          Remove <MdDelete />
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(bagActions.addToBag(item.id));
          }}
          type="button"
          className="btn btn-success btn-add-bag"
        >
          Add to Bag <IoIosAddCircleOutline />
        </button>
      )}
    </div>
  );
};

export default HomeItem;
