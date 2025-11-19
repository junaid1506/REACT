import React, { useContext, useState } from "react";
import { PostList } from "../Store/post-list-store";

const InputPost = () => {

  const {addPost}  = useContext(PostList)
  const [title, setTitle] = useState();

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          Enter the title for your post
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button className="btn btn-primary"   onClick={()=>addPost(title)}>
        Submit
      </button>
    </form>
  );
};

export default InputPost;
