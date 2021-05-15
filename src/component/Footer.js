import React from "react";
import {NavLink} from "react-router-dom";
const Footer = () =>(
    <footer>
        <NavLink to={"/edit"} activeStyle={{ textDecoration: 'none' }} >
        <p>©2021- 上原ゆりあ</p>
        </NavLink>
    </footer>
)

export default Footer;
