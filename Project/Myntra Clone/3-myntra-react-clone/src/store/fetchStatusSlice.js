import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone : false,
    currentlyFetching : false
  },
  reducers: {
    markFetchDone :(store,action) =>{
      return store
    },
    markFetchingStarted :(store,action)=>{
      return store
    },
    markFetchingFinised
  },
});
export const fetchStatusAction = fetchStatusSlice.actions;
export default itemsSlice;
