import React from "react";

const SideBar = ({ currentNav, setCurrentNav }) => {
  let NavHome = () => {
    setCurrentNav("Home");
  };
  let NavCreatePost = () => {
    setCurrentNav("Current Post");
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      {" "}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        {" "}
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>{" "}
        <span className="fs-4">JND Hub</span>{" "}
      </a>{" "}
      <hr />{" "}
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li className="nav-item">
          {" "}
          <a
            onClick={NavHome}
            href="#"
            className={`nav-link text-white ${
              currentNav === "Home" && "active"
            }`}
            aria-current="page"
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>{" "}
        </li>{" "}
        <li>
          {" "}
          <a
            onClick={NavCreatePost}
            href="#"
            className={`nav-link text-white ${
              currentNav === "Current Post" && "active"
            }`}
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>{" "}
        </li>{" "}
      </ul>{" "}


    </div>
  );
};

export default SideBar;
