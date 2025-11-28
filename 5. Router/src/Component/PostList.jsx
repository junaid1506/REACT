import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListContext } from "../Store/post-list-store";
import EmptyMsg from "./EmptyMsg";
import LoadingSpiner from "./LoadingSpiner";

const PostList = () => {
  const { postList, feteching } = useContext(PostListContext);

  return (
    <>
      {feteching && <LoadingSpiner />}
      {!feteching && postList.length === 0 && <EmptyMsg />}
      {!feteching && postList.map((item) => <Post key={item.id} item={item} />)}
    </>
  );
};

export default PostList;
