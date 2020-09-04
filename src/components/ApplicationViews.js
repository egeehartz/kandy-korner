import React from "react"
import {Route} from "react-router-dom"
import {LocationProvider} from "./locations/LocationProvider"
import {LocationList} from "./locations/LocationList"
import {ProductList} from "./products/ProductList"
import {ProductProvider} from "./products/ProductProvider"



export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
            <ProductProvider>
                <Route path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
        </>
    )
}

/*
<LocationProvider>
    <Route path="/Locations">
         <LocationList />
    </Route>
</LocationProvider>
*/