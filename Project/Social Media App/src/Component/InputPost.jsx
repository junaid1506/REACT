import React, { useContext, useState } from "react";
import { PostList } from "../Store/post-list-store";
import "./inputpost.css"

const InputPost = ({setCurrentNav}) => {

  const {addPost}  = useContext(PostList)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [reactions, setReactions] = useState("");
  const [userId, setUserId] = useState("");
  const [tags, setTags] = useState("");

  return (
    <form className="input-post-form">

  <div className="mb-3 input-post-group">
    <label htmlFor="title" className="form-label">Title</label>
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      className="form-control input-post-input"
      id="title"
    />
  </div>

  <div className="mb-3 input-post-group">
    <label htmlFor="body" className="form-label">Body</label>
    <input
      value={body}
      onChange={(e) => setBody(e.target.value)}
      type="text"
      className="form-control input-post-input"
      id="body"
    />
  </div>

  <div className="mb-3 input-post-group">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <input
      value={reactions}
      onChange={(e) => setReactions(e.target.value)}
      type="number"
      className="form-control input-post-input"
      id="reactions"
    />
  </div>

  <div className="mb-3 input-post-group">
    <label htmlFor="userId" className="form-label">UserId</label>
    <input
      value={userId}
      onChange={(e) => setUserId(e.target.value)}
      type="number"
      className="form-control input-post-input"
      id="userId"
    />
  </div>

  <div className="mb-3 input-post-group">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input
      value={tags}
      onChange={(e) => setTags(e.target.value)}
      type="text"
      className="form-control input-post-input"
      id="tags"
    />
  </div>

  <button className="btn btn-primary input-post-btn" onClick={() => addPost(title,body,reactions,userId,tags) }>
    Submit
  </button>

</form>

  );
};

export default InputPost;
