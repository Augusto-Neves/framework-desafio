import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.scss";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("posts?userId=1")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(`Ocorreu o erro: ${err}`));
  }, []);

  return (
    <main>
      <div className="container">
        <h2>Suas Postagens</h2>
        <div className="post-boxes">
          {posts.map((post) => {
            return (
              <div className="post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
