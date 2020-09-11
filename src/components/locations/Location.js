import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
    <section className="location">
        <div>{location.name}</div>
        <div className="location__place">{location.address}</div>
    </section>
)