import React, {useContext, useEffect} from "react"
import {CustomerContext} from "./CustomerProvider"
import {Customer} from "./Customer"


export const CustomerList = () => {
    const {customers, getCustomers} = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    },[])
    useEffect(() => {
        getCustomers()
    },[customers])


    return (
        <div>
            {
                customers.map(c => <Customer key={c.id} customer={c}/>)
            }
        </div>
    )
}