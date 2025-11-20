import { act, createContext, useReducer } from "react";

const MyProductListData = createContext({
  productList: [],
  addProduct: () => {},
  deleteProduct: () => {},
});

const postListReducer = (state, action) => {

switch(action.type){
  case 'DELETE_POST' : 
    return newState = state.filter((post) => post.id !== action.payload.postId);

  case 'ADD_PRODUCT'  : 
     return [
      {
        id: Math.random().toString(36).substring(2, 9),
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        userId: action.payload.userId,
        tags: action.payload.tags,
      },
      ...state,
     ]
}
















  let newState = state;
  if (action.type === "DELETE_POST") {
    newState = state.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_PRODUCT") {
    newState = [
      {
        id: Math.random().toString(36).substring(2, 9),
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        userId: action.payload.userId,
        tags: action.payload.tags,
      },
      ...state,
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
