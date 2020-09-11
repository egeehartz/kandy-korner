import React, {useContext,useEffect, useState} from "react"
import {ProductContext} from "./ProductProvider"
import {Product} from "./Product"
import "./Product.css"

export const ProductList = () => {
    const {products, getProducts, searchTerms} = useContext(ProductContext)
    const [filteredProducts, setFiltered] = useState([])


    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        const matchingProd = products.filter(prod => prod.name.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(matchingProd)
    }, [searchTerms])

    useEffect(() => {
        setFiltered(products)
    },[products])

    return (
        <div className="products">
            {
                filteredProducts.map(prod => <Product key={prod.id} product={prod} />)
            }
        </div>
    )
}