import React, { useContext } from "react";
import "./Post.css";
import { PostList } from "../Store/post-list-store";

const Post = ({ item }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="post-card">
      <div className="post-body">
        <h5 className="post-title">{item.title}</h5>
        <p className="post-text">{item.body}</p>

        <div className="post-meta">
          <div>
            <span className="likes">{item.reactions.likes} ❤</span>
          </div>
          <div className="tag-con">
            {item.tags.map((i) => (
              <span className="tags">{i}</span>
            ))}
          </div>
        </div>

        <div className="post-buttons">
          <button className="btn-hide" onClick={(e) => deletePost(item.id)}>
            Hide Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
