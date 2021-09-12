import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./style.scss";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    api
      .get("albums?userId=1")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(`Ocorreu o erro: ${err}`));
  }, []);

  return (
    <main>
      <div className="container">
        <h2>Seus Álbuns</h2>
        <div className="album-boxes">
          {albums.map((album) => {
            return (
              <div className="album" key={album.id}>
                <h3>{album.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
