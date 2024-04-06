import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  // fetching: false,
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (item) => item.id !== action.payload.postID
    );
  } else if (action.type === "CREATE_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "CREATE_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: post,
    });
  };

  const addPosts = (posts) => {
    dispatchPostList({
      type: "CREATE_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postID) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postID } });
  };

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   setFetching(true);
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addPosts(data.posts);
  //       // addPosts([]);
  //       setFetching(false);
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //     });
  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        // fetching,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
