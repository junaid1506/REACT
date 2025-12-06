import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone : false,
    currentlyFetching : false
  },
  reducers: {
    markFetchDone :(state) =>{
      return state.fetchDone
    },
    markFetchingStarted :(state)=>{
      return state
    },
    markFetchingFinised : (state)=>{
      return state
    }
  },
});
export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
