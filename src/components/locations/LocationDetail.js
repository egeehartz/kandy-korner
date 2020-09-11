import React, {useContext, useEffect, useState} from "react"
import {LocationContext} from "./LocationProvider"


export const LocationDetails = (props) => {
    const {getLocationById} = useContext(LocationContext)
    const [location, setLocation] = useState({})

    useEffect(() => {
        const locationId = parseInt(props.match.params.locationId)
        getLocationById(locationId)
            .then(setLocation)
    },[])

    return (
        <section>
            <div>{location.name}</div>
            <div className="location__place">{location.address}</div>
            <div className="location__sqft">{location.sqft} square feet</div>
            <div className="location__handicap">Handicap Accessible: {String(location.handicapAccessible)}</div>
        </section>
    )

}
