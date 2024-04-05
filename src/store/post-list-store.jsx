import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPosts: () => {},
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
  const addPost = (UserID, postDescription, postReact, postTags, postTitle) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postDescription,
        reactions: postReact,
        userId: UserID,
        tags: postTags,
      },
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
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
