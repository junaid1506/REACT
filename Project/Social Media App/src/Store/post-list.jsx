import { createContext, useReducer } from "react";

const MyProductListData = createContext(
  {
    productList : [],
    addProduct : ()=>{},
    deleteProduct : ()=>{}
  }
)


const  myReducer  = (state, action)=>{
  return state
}


const MyProductListDataProvider = ({children})=>{


  const [productList ,dispatchProductList]  = useReducer(myReducer, [])


  const addProduct = ()=>{

    dispatchProductList()

  }
  const  deleteProduct= ()=>{

  }

  return (
    <MyProductListData.Provider value={{
      productList,
      addProduct,
      deleteProduct
    }} >
      {children}
    </MyProductListData.Provider>
  )
}