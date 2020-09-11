import React, {useContext,useEffect} from "react"
import {CandyCustomersContext} from "./CandyCustomersProvider"
import {MyOrder} from "./Order"


export const OrderList = () => {
    const {candyCustomers, getCandyCustomers} = useContext(CandyCustomersContext)

    useEffect(() => {
        getCandyCustomers()
    }, [])

    useEffect(() => {
    }, [candyCustomers])

    return (
        <div className="candyCustomers">
            {
                candyCustomers.map(cc => <MyOrder key={cc.id} order={cc} />)
            }
        </div>
    )
}