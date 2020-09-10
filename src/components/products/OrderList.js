import React, {useContext,useEffect} from "react"
import {CandyCustomerContext} from "./CandyCustomerProvider"
import {CandyCustomer} from "./CandyCustomer"
import { ProductContext } from "./ProductProvider"
//import{CustomerContext} from "../"


export const CandyCustomerList = () => {
    const {candyCustomers, getCandyCustomers} = useContext(CandyCustomerContext)
   // const{customers, getCustomers} = useContext(CustomerContext)
   const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {
        getCandyCustomers()
    }, [])

    useEffect(() => {
    }, [candyCustomers])

    return (
        <div className="candyCustomers">
            {
                candyCustomers.map(cc => <CandyCustomer key={cc.id} CandyCustomer={cc} />)
            }
        </div>
    )
}