import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data.data);
        setLoading(false);
        console.log("Post ricevuti dal context:", res.data.data);
      })
      .catch((err) => {
        console.error("Errore nel recupero dei post:", err);
        setLoading(false);
      });
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading }}>
      {children}
    </PostsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePosts() {
  return useContext(PostsContext);
}
