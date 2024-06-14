export type ProductType = {
    id: number 
    title: string 
    description: string 
    price: number 
    discountPercentage: number 
    rating: number 
    stock: number 
    tags: string[]
    brand: string 
    sku: string 
    weight: number
    category: string 
    thumbnail: string 
    images: string[]
    quantity?: number
}