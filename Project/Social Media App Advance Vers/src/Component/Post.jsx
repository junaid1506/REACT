import React, {  useContext } from "react";
import './Post.css'
import { PostList } from "../Store/post-list-store";

const Post = ({item}) => {
const {deletePost} = useContext(PostList)


  return (
     <div className="post-card">
      <div className="post-body">
        <h5 className="post-title">{item.title}</h5>
        <p className="post-text">{item.body}</p>

        <div className="post-meta">
          <span className="likes">{item.reactions.like} ❤</span>
          <span className="tags">Tags: {item.tags.join(',')}</span>
        </div>

        <div className="post-buttons">
         
          <button className="btn-hide" onClick={(e)=>deletePost(item.id)}>
            Hide Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
