import { createContext, useContext, useState } from "react";

const PostContext = createContext();

function PostsProvider({ children }) {
  const [post, setPost] = useState();
  const postData = { post, setPost };
  return (
    <PostContext.Provider value={postData}>{children}</PostContext.Provider>
  );
}

function usePosts() {
  return useContext(PostContext);
}

export { PostsProvider, usePosts };
