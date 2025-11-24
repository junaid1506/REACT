import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListContext } from "../Store/post-list-store";
import EmptyMsg from "./EmptyMsg";
import LoadingSpiner from "./LoadingSpiner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [feteching, setFetching] = useState(false);

  useEffect(() => {
    console.log('fetch start ')
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
        console.log('fetch return ')
      });
      console.log('fetch end ')
  }, []);

  return (
    <>
    {feteching && <LoadingSpiner/>}
      {!feteching && postList.length === 0 && <EmptyMsg />}
      {!feteching && postList.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </>
  );
};

export default PostList;