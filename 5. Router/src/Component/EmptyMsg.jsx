import React from "react";
import "./empty-msg.css";

const EmptyMsg = () => {
  return (
    <div className="container my-5">
      {" "}
      <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
        {" "}
        <h1 className="text-body-emphasis">Welcome JND Hub</h1>
        <p className="col-lg-6 mx-auto mb-4">
          There are no posts available right now. Feel free to create a new
          post, or fetch the latest data to get started.
        </p>
        {/* <button className="btn btn-primary px-5 mb-5" type="button" onClick={onClickDataFetch}>
          Fetch The Post From Server
        </button>{" "} */}
      </div>{" "}
    </div>
  );
};

export default EmptyMsg;
