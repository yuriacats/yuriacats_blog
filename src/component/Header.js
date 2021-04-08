import React from "react";
import {NavLink} from "react-router-dom";

const Header = () =>(
    <header>
        <NavLink to="/" activeStyle={{ color: '#f9f9f9',textDecoration: "none" }}>
            <p>コーヒー/読書/プログラミングが好きな女子大生の日常</p>
            <h1>yuriacats's blog</h1>
        </NavLink>
    </header>
)

export default Header;