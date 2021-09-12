import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <ul>
          <li>
            <Link to="/posts">Postagens</Link>
          </li>

          <li>
            <Link to="/albums">Álbuns</Link>
          </li>

          <li>
            <Link to="/to-do">To-Dos</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
