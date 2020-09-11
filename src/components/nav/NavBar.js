import React from "react"
import {Link} from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul>
            <li className="navbar__locations">
                <Link className="navbar__link" to="/">Locations</Link>
            </li>
            <li className="navbar__products">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__employees">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__order">
                <Link className="navbar__link" to="/order">My Order</Link>
            </li>
            <li className="navbar__customers">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
        </ul>
    )
}