import { act, createContext, useReducer } from "react";

const MyProductListData = createContext(
  {
    productList : [],
    addProduct : ()=>{},
    deleteProduct : ()=>{}
  }
)


const  myReducer  = (state, action)=>{
  let newState = state
  newState =  state.filter(item=>item !== action.payload)
  return newState
}


const MyProductListDataProvider = ({children})=>{


  const [productList ,dispatchProductList]  = useReducer(myReducer, [])


  const addProduct = ()=>{

    dispatchProductList()

  }
  const  deleteProduct= (productID)=>{
    dispatchProductList({
      type :"DELETE",
      payload:{
        productID
      }
    })
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