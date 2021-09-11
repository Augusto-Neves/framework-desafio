import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {IoArrowBackCircleSharp} from "react-icons/io5"

import Logo from "../../assets/img/logo.png";
import "./style.scss";

export default function Header() {
  const location = useLocation();
  return (
    <header>
      {/* Botão de Voltar para o ínicio */}
      {location.pathname === "/" ? (
        <div></div>
      ) : (
        <div>
          <NavLink to="/"> <IoArrowBackCircleSharp /></NavLink>
        </div>
      )}
      <NavLink to="/">
        <img src={Logo} alt="YourLists" />
      </NavLink>
    </header>
  );
}
