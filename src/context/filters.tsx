import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

interface Filters {
    category: string;
    minPrice: number;
}

interface FiltersContextType {
    filters: Filters;
    setFilters: Dispatch<SetStateAction<Filters>>;
}

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined)

export function FiltersProvider({children}:{children:React.ReactNode}) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
       <FiltersContext.Provider value={{filters, setFilters}}>
            {children}
       </FiltersContext.Provider>
    )
}

export function useFiltersContext() {
    const context = useContext(FiltersContext);
    if (context === undefined) {
        throw new Error('useFiltersContext debe usarse dentro de un FiltersProvider');
    }
    return context;
}