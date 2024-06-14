import { useFiltersContext } from "../context/filters";
import type { ProductType } from "../interfaces/product.interface";

export function useFilterProducts() {
    const { filters, setFilters } = useFiltersContext()

    const filterProducts = (products:ProductType[]) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice && (filters.category === 'all' || filters.category === product.category)
            )
        })
    }

    return { filters, setFilters, filterProducts }
}