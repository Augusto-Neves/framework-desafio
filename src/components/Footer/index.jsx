import React from "react";
import "./style.scss";

export default function Footer() {
  return (
    <footer>
      <span>
        Desenvolvido por <b>Augusto Neves</b>
      </span>
      
      <div className="social-midias">
        <a
          href="https://www.linkedin.com/in/augustonevesdev/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://github.com/Augusto-Neves"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="mailto:augusto.agt1995@gmail.com" rel="noreferrer">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}
