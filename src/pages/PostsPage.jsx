import { Link } from "react-router-dom";
import { usePosts } from "../contexts/PostContext";

export default function PostsPage() {
  const { posts, loading } = usePosts();

  if (loading) return <p>Caricamento...</p>;

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
