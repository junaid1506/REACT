import Post from "./Post";
import { useContext, useState } from "react";
import { PostList as PostListContext } from "../Store/post-list-store";
import EmptyMsg from "./EmptyMsg";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [dataFetched, setDataFetched] = useState(false);

  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
      setDataFetched(true)
  }

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
