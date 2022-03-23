import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faCartShopping} from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
    return (
        <>
            <header id="header">

                <h1>Cripto Jack</h1>

                <p>Bienvenido</p>
                <a href="#">
                <FontAwesomeIcon icon={faCartShopping} />
                </a>
                <nav>
                    <a href="#">Categorias</a>
                    <a href="#">Login</a>
                </nav>

            </header>

        </>

    )
}

export default NavBar