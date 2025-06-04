import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((err) => {
        console.error("Errore nel recupero del post:", err);
      });
  }, [id]);

  // Gestione del loading o del caso in cui il post non sia ancora caricato
  if (!post) {
    return <div>Caricamento...</div>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <span>{post.content}</span>

      <ul>
        <h6>Tags:</h6>
        {post.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
