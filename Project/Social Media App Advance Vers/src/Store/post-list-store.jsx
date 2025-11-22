import { createContext, useReducer } from "react";

const PRODUCT_LIST_DEMO = '';

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.postId);

    case "ADD_PRODUCT":
      return [
        {
          id: Math.random().toString(36).substring(2, 9),
          title: action.payload.title,
          body: action.payload.body,
          reactions: action.payload.reactions,
          userId: action.payload.userId,
          tags: action.payload.tags,
        },
        ...state,
      ];

    default:
      return state;
  }

  // let newState = state;
  // if (action.type === "DELETE_POST") {
  //   newState = state.filter((post) => post.id !== action.payload.postId);
  // } else if (action.type === "ADD_PRODUCT") {
  //   newState = [
  //     {
  //       id: Math.random().toString(36).substring(2, 9),
  //       title: action.payload.title,
  //       body: action.payload.body,
  //       reactions: action.payload.reactions,
  //       userId: action.payload.userId,
  //       tags: action.payload.tags,
  //     },
  //     ...state,
  //   ];
  // }

  // return newState;
};

const PostListProvide = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );
  let addPost = (title, body, reactions, userId, tags) => {
    dispatchPostList({
      type: "ADD_PRODUCT",
      payload: {
        title,
        body,
        reactions,
        userId,
        tags,
      },
    });
  };
  let deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

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
