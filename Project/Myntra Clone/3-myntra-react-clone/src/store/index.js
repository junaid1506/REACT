import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemSlice"


const store = configureStore({
  reducer:{
    items: itemsSlice.reducer
  }
})

export default store