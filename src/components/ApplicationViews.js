import React from "react"
import {Route} from "react-router-dom"



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