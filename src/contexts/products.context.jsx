import { createContext } from "react";
import { useState } from "react";
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    // empty state
    products: [],

    // function set products
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    return (
        <ProductsContext.Provider value ={value}> {children}</ProductsContext.Provider>
    )
}