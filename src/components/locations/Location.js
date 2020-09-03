import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
    <section className="location">
        <div className="location__place">{location.address}</div>
        <div className="location__sqft">{location.sqft} square feet</div>
        <div className="location__handicap">Handicap Accessible: {String(location.handicapAccessible)}</div>
    </section>
)