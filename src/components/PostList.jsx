import { useContext } from "react";
import PostCard from "./PostCard";
import Msg from "./Msg";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList, addPosts } = useContext(PostListData);
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && <Msg onGetPostsClick={handleGetPostsClick} />}

      {postList.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </>
  );
};
export default PostList;
