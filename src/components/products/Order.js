import React from "react"
import {CandyCustomersContext} from "./CandyCustomersProvider"


export const MyOrder = ({order} ) => (

    <>
    <section>
        <div>{order.product.name} for ${order.product.price}</div>
    </section>
    </>
)
    /*<section className="product">
        <div className="product__name">Product: {product.name}</div>
        <div className="product__type">Type: {product.productTypeId}</div>
        <div className="product__price">${product.price}</div>
        <button>Purchase!</button>
    </section>*/