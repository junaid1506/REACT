import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postReducer = (state, action) => {
  return state;
};

const PostListProvide = (children) => {
  const [postList, dispatchPostList] = useReducer([], postReducer);
  let addPost = () => {};
  let deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvide;
