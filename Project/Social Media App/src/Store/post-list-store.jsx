import { createContext } from "react";

const PostList = createContext();

const PostListProvide = (children) => {
  return <PostList.Provider value={[]}>{children}</PostList.Provider>;
};

export default PostListProvide;
