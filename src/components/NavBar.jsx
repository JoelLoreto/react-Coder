import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <header id="header">

                <h1>Tienda Jack</h1>

                <p>Bienvenido</p>
               <CartWidget/>
                <nav>
                    <a href="#">Categorias</a>
                    <a href="#">Login</a>
                </nav>

            </header>

        </>

    )
}

export default NavBar