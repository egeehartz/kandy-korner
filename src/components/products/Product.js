import React, {useContext} from "react"
import { CandyCustomersContext } from "./CandyCustomersProvider"
import "./Product.css"


export const Product = ({product}) => {
    const {addCandyCustomers} = useContext(CandyCustomersContext)

    return (
    <section className="product">
        <div className="product__name">Product: {product.name}</div>
        <div className="product__type">Type: {product.productTypeId}</div>
        <div className="product__price">${product.price}</div>
        <button
            onClick={event => {
                addCandyCustomers({
                    customerId: parseInt(localStorage.getItem("kandy_customer")),
                    productId: product.id
                })}}
        >Purchase!</button>
    </section>
    )
}
    
    
/*
{
    customerId: localStorage.getItem("kandy_customer")
    productId: product.id
}
*/