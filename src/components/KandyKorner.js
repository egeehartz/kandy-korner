import React from "react"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)