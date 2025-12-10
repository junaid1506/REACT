import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // console.log(items);
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinised());
        dispatch(itemsAction.addIntialItem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <div>
      Fetch Done : {fetchStatus.fetchDone}
      Currently Fetching :{fetchStatus.currentlyFetching}
    </div>
  );
};

export default FetchItems;