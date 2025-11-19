import { act, createContext, useReducer } from "react";

const MyProductListData = createContext({
  productList: [],
  addProduct: () => {},
  deleteProduct: () => {},
});

const myReducer = (state, action) => {
  let newState = state;
  if (action.type === "DELETE") {
    newState = state.filter((item) => item !== action.payload);
  } else if (action.type === "ADD_PRODUCT") {
    newState = [
      ...state,
      {
        id: "6",
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        tags: action.payload.tags,
      },
    ];
  }

  return newState;
};

const MyProductListDataProvider = ({ children }) => {
  const [productList, dispatchProductList] = useReducer(myReducer, []);

  const addProduct = (title, body, reactions, userId, tags) => {
    dispatchProductList({
      type: "ADD_PRODUCT",
      payload: {
        title,
        body,
        reactions,
        userId,
        tags,
      },
    });
  };
  const deleteProduct = (productID) => {
    dispatchProductList({
      type: "DELETE",
      payload: {
        productID,
      },
    });
  };

  return (
    <MyProductListData.Provider
      value={{
        productList,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </MyProductListData.Provider>
  );
};
