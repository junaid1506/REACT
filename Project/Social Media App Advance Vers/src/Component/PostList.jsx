import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListContext } from "../Store/post-list-store";
import EmptyMsg from "./EmptyMsg";

const PostList = () => {
  const { postList , addInitialPosts } = useContext(PostListContext);

  const handleSubmit = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((res) =>(
      addInitialPosts(res.post)
      ));
  };

  return (
    <>
      {postList.length === 0 && <EmptyMsg onClickDataFetch={handleSubmit} />}
      {postList.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </>
  );
};

export default PostList;
