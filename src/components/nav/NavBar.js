import React from "react"
import {Link} from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul>
            <li className="navbar__locations">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__products">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
        </ul>
    )
}