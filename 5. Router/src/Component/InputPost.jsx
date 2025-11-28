import React, { useContext, useState } from "react";
import { PostList } from "../Store/post-list-store";
import "./inputpost.css";

const InputPost = ({ setCurrentNav }) => {
  const { addPost } = useContext(PostList);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [reactions, setReactions] = useState("");
  const [userId, setUserId] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags.split(" "),

        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
    // .then((posts) => addPost(title, body, reactions, userId, tags));

    // addPost(title, body, reactions, userId, tags);
    setCurrentNav("Home");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <form className="input-post-form" onSubmit={handleSubmit}>
      <div className="mb-3 input-post-group">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control input-post-input"
          id="title"
        />
      </div>

      <div className="mb-3 input-post-group">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          className="form-control input-post-input"
          id="body"
        />
      </div>

      <div className="mb-3 input-post-group">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          value={reactions}
          onChange={(e) => setReactions(e.target.value)}
          type="number"
          className="form-control input-post-input"
          id="reactions"
        />
      </div>

      <div className="mb-3 input-post-group">
        <label htmlFor="userId" className="form-label">
          UserId
        </label>
        <input
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          type="number"
          className="form-control input-post-input"
          id="userId"
        />
      </div>

      <div className="mb-3 input-post-group">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          type="text"
          className="form-control input-post-input"
          id="tags"
        />
      </div>

      <button className="btn btn-primary input-post-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputPost;
