import { useState } from "react"
import { ProductType } from "../interfaces/product.interface"

export function useGetProducts() {
    const [products, setProducts] = useState<ProductType[]>([])
    const [loaded, setLoaded] = useState(false)

    const getProducts = async() => {
        setLoaded(true)
        try {
            const res = await fetch('https://dummyjson.com/products?limit=15') 
            const data = await res.json()
            setProducts(data.products)
        } catch (error) {
            throw new Error("Error at fetching")
        }
        setLoaded(false)
    }

    
    
    return { products, getProducts, loaded }
}