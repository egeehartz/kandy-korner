import React, {useContext} from "react"
import {ProductContext} from "./ProductProvider"

export const ProductSearch = () => {
    const {setTerms} = useContext(ProductContext)

    return (
        <>
            <div>Search for Candy</div>
            <input type="text"
                onChange={
                    chEvent => {
                        setTerms(chEvent.target.value)
                    }
                }
                placeholder="type here..." />
        </>
    )
}