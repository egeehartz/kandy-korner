import React from "react"
import "./Product.css"

export const Product = ({product}) => (
    <section className="product">
        <div className="product__name">{product.name}</div>
    </section>
)