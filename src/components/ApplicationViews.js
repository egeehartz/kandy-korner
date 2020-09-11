import React from "react"
import {Route} from "react-router-dom"
import {LocationProvider} from "./locations/LocationProvider"
import {LocationList} from "./locations/LocationList"
import {ProductList} from "./products/ProductList"
import {ProductProvider} from "./products/ProductProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import {EmployeeList} from "./employees/EmployeeList"
import {EmployeeForm} from "./employees/EmployeeForm"
import { CandyCustomersProvider} from "./products/CandyCustomersProvider"
import {OrderList} from "./products/OrderList"
import {CustomerList} from "./customers/CustomerList"
import {CustomerProvider} from "./customers/CustomerProvider"



export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>
            <ProductProvider>
                <CandyCustomersProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </CandyCustomersProvider>
            </ProductProvider>
            <EmployeeProvider>
                <LocationProvider>
                <Route exact path="/employees" render={
                    props => <EmployeeList {...props} />
                } />
                <Route exact path="/employees/create" render={
                    props => <EmployeeForm {...props}/>    
                } />
                </LocationProvider>
            </EmployeeProvider>
            <CandyCustomersProvider>
                <Route path="/order">
                <OrderList />
                </Route>
            </CandyCustomersProvider>
 <CustomerProvider>
    <Route path="/customers">
        <CustomerList />
    </Route>
 </CustomerProvider>
        </>
    )
}



