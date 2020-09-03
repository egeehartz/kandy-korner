import React, {useContext,useEffect} from "react"
import {ProductContext} from "./ProductProvider"
import {Product} from "./Product"
import "./Product.css"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
    }, [products])

    return (
        <div className="products">
            {
                products.map(prod => <Product key={prod.id} product={prod} />)
            }
        </div>
    )
}