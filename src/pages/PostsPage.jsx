import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Posts</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>nome</th>
              <th>azione</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <Link to={`/posts/${post.id}`}> Mostra dettagli </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
