import React from "react";
import './Post.css'
const Post = ({item}) => {
  return (
     <div className="post-card">
      <div className="post-body">
        <h5 className="post-title">{item.title}</h5>
        <p className="post-text">{item.body}</p>

        <div className="post-meta">
          <span className="likes">{item.reactions} ❤</span>
          <span className="tags">Tags: {item.tags}</span>
        </div>

        <div className="post-buttons">
          <button className="btn-primary">Go somewhere</button>
          <button className="btn-hide" onClick={() => setHide(true)}>
            Hide Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
