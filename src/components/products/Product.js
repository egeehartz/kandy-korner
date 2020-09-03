import React from "react"
import "./Product.css"

export const Product = ({product}) => (
    <section className="product">
        <div className="product__name">Product: {product.name}</div>
        <div className="product__type">Type: {product.productTypeId}</div>
        <div className="product__price">${product.price}</div>
    </section>
)