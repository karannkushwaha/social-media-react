import { useContext } from "react";
import PostCard from "./PostCard";
import Msg from "./Msg";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList } = useContext(PostListData);
  const postList = useLoaderData();
  // useLoaderData();

  // const handleGetPostsClick = () => {
  //   // fetch("https://dummyjson.com/posts")
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     addPosts(data.posts);
  //   //   });
  // };
  return (
    <>
      {/* {postList.length === 0 && <Msg onGetPostsClick={handleGetPostsClick} />} */}
      {/* <LoadingSpinner /> */}

      {postList.length === 0 && <Msg />}

      {postList.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </>
  );
};
export default PostList;

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
