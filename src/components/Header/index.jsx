import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
import './style.scss'

export default function Header(){
    return(
        <header>
            <NavLink to="/">
              <img src={Logo} alt="" />  
            </NavLink>
        </header>
    );
}