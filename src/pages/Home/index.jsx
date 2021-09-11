import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <NavLink to="/posts">Postagens</NavLink>
        </li>

        <li>
          <NavLink to="/albums">Álbuns</NavLink>
        </li>

        <li>
          <NavLink to="/to-do">To-Dos</NavLink>
        </li>
      </ul>
    </main>
  );
}
