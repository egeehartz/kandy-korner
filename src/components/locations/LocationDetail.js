import React, {useContext, useEffect, useState} from "react"
import {LocationContext} from "./LocationProvider"
//import {EmployeeContext} from "../employees/EmployeeProvider"


export const LocationDetail = (props) => {
    const { getLocationById } = useContext(LocationContext)
    const [location, setLocation] = useState({})

    useEffect(() => {
        const locationId = parseInt(props.match.params.locationId)
        getLocationById(locationId)
            .then(setLocation)
    }, [])
    return (
        <section>
            <h2>{location.name}</h2>
            <div className="location__place">{location.address}</div>
            <div>
            <h4>Employees</h4>
            </div>
            <div className="location__sqft">{location.sqft} square feet</div>
            <div className="location__handicap">Handicap Accessible: {String(location.handicapAccessible)}</div>
        </section>
    )

}
