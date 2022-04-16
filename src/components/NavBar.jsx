import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <header id="header">

                <h1>Tienda Jack</h1>

                <p>Bienvenido</p>
                <CartWidget />
                <nav>
                    <Link to="/">Inicio</Link>
                    <Link to="/category/bazar">Bazar</Link>
                    <Link to="/category/hogar">Hogar</Link>
                    <Link to="/">Login</Link>
                </nav>

            </header>

        </>

    )
}

export default NavBar