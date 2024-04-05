import { useContext } from "react";
import PostCard from "./PostCard";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </>
  );
};
export default PostList;
