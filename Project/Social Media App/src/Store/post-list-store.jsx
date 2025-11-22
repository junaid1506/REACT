import { createContext, useReducer } from "react";

const PRODUCT_LIST_DEMO = [
  {
    id: "1",
    title: "JavaScript Performance Tips",
    body: "I recently optimized a large React project and learned that memoization and avoiding unnecessary re-renders can drastically improve performance.",
    reactions: "24",
    userId: "12",
    tags: "javascript,react,performance",
  },
  {
    id: "2",
    title: "Travel Experience in Istanbul",
    body: "Visited Istanbul last month — the mix of culture, history, and food was incredible. Highly recommend exploring the Grand Bazaar and taking a Bosphorus cruise.",
    reactions: "41",
    userId: "27",
    tags: "travel,istanbul,experience",
  },
  {
    id: "3",
    title: "Healthy Morning Routine",
    body: "Starting my day with a 20-minute workout and a protein-rich breakfast has improved my energy levels and focus throughout the day.",
    reactions: "18",
    userId: "9",
    tags: "health,lifestyle",
  },
  {
    id: "4",
    title: "AI Tools Changing Web Development",
    body: "New AI-driven tools are making it easier than ever to generate UI layouts, detect bugs, and optimize code automatically.",
    reactions: "33",
    userId: "4",
    tags: "ai,webdev,technology",
  },
  {
    id: "5",
    title: "How I Improved My Productivity",
    body: "Using time-blocking and eliminating multitasking helped me finish work faster and with better quality.",
    reactions: "12",
    userId: "19",
    tags: "productivity,work",
  },
];

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
    PRODUCT_LIST_DEMO
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
