import { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import Msg from "./Msg";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // const { signal },controller = new AbortController();
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        // addPosts([]);
        setFetching(false);
      });
    return () => {
      try {
        controller.abort();
      } catch (e) {
        console.log(e);
      }
    };
  }, []);

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
      {fetching && <LoadingSpinner />}

      {!fetching && postList.length === 0 && <Msg />}

      {!fetching &&
        postList.map((item) => <PostCard key={item.id} post={item} />)}
    </>
  );
};
export default PostList;
