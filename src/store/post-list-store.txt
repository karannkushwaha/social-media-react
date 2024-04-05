import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
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
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    default_post_list
  );
  const addPost = (UserID, postDescription, postReact, postTags, postTitle) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: {
        id: Date.now(),
        tittle: postTitle,
        body: postDescription,
        reaction: postReact,
        userID: UserID,
        tags: postTags,
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
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const default_post_list = [
  {
    id: "1",
    tittle: "hello",
    body: "wolrd",
    reaction: 10,
    userID: "u091",
    tags: ["aa", "bb", "cc", "dd"],
  },
  {
    id: "2",
    tittle: "pqr",
    body: "wolrd",
    reaction: 10,
    userID: "u091",
    tags: ["aa", "bb", "cc", "dd"],
  },
  {
    id: "3",
    tittle: "abc",
    body: "wolrd",
    reaction: 10,
    userID: "u091",
    tags: ["aa", "bb", "cc", "dd"],
  },
  {
    id: "4",
    tittle: "xyz",
    body: "wolrd",
    reaction: 10,
    userID: "u091",
    tags: ["aa", "bb", "cc", "dd"],
  },
];

export default PostListProvider;
