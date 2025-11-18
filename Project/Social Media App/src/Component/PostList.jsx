
import Post from "./Post";
import postList from "../Store/post-list-store";
import { useContext } from "react";
import {PostList as PostListContext} from "../Store/post-list-store";

const PostList = () => {

 const {postList} =  useContext(PostListContext)
  
  return (
    <>
    {
      postList.map(item=>(
        <Post key={item.id}  item={item}/>
      ))
    }

    </>
  );
};

export default PostList;
