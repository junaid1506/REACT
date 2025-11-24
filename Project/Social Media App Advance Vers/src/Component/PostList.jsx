import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListContext } from "../Store/post-list-store";
import EmptyMsg from "./EmptyMsg";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);

  useEffect(()=>{
     fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  },[])

  return (
    <>
      {postList.length === 0 && <EmptyMsg />}
      {postList.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </>
  );
};

export default PostList;
