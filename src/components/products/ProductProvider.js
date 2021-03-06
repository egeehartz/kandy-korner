import React, {useState} from "react"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [searchTerms, setTerms] = useState("")

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setProducts)
    }

    const addProduct = Product => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Product)
        })
            .then(getProducts)
    }

    return (
        <ProductContext.Provider value={{
            products, addProduct, getProducts, setTerms, searchTerms
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}