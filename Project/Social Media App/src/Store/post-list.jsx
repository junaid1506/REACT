import { createContext, useReducer } from "react";

const ProductList = createContext({
  productList: [],
  addProduct: () => {},
  deleteProduct: () => {},
});

const productProducer  = (state, action)=>{
  return state
}

const ProductListProvider = (children) => {
  const [productList, dispatchProductlist] = useReducer([], productProducer);
  const addProduct = () => {};
  const deleteProduct = () => {};

  return (
    <ProductList.Provider
      value={{
        productList,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductList.Provider>
  );
};
