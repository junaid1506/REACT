import React from "react";
import { useSelector } from "react-redux";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <div>
      Fetch Done : {fetchStatus.fetchDone}
      Currently Fetching :{fetchStatus.currentlyFetching}
    </div>
  );
};

export default FetchItems;