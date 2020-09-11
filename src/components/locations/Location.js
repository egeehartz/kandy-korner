import React from "react"
import "./Location.css"
import {Link} from "react-router-dom"


export const Location = ({ location }) => (
    <section className="location">
        <div>
            <Link to={`/locations/${location.id}`}>
                {location.name}
                </Link>
                </div>
        <div className="location__place">{location.address}</div>
    </section>
)