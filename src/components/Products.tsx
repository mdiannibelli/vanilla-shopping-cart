import { useEffect } from "react"
import { useGetProducts } from "../hooks/getProducts"
import Filters from "./Filters"
import { useFilterProducts } from "../hooks/filterProducts"
import { IoCartSharp } from "react-icons/io5"
import { useCartContext } from "../context/cart"

const Products = () => {
  const { products, loaded, getProducts } = useGetProducts()
  const { filterProducts } = useFilterProducts()
  const { addProduct } = useCartContext()
  useEffect(() => {
    getProducts()
  }, [])

  const filteredProducts = filterProducts(products)

  return (
    <section className="flex flex-col justify-center items-center">
        <Filters/>
    <div className='grid grid-cols-3 gap-4 max-w-[1280px] mt-12'>
        {
            loaded ? <p className='text-white text-xl col-span-3'>Loading...</p> : 
            filteredProducts.map((product) => (
                <div key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <span className='text-xs text-white'>{product.category}</span>
                    <h2 className='font-medium text-xl text-white'>{product.title}</h2>
                    <span className='font-semibold text-lg text-white'>${product.price}</span>
                    <IoCartSharp onClick={() => addProduct(product)} className="cursor-pointer hover:bg-cyan-700 duration-300 text-cyan-500 bg-white rounded-2xl p-2" size={35}/>
                </div>
            ))
        }
    </div>
    </section>
  )
}

export default Products
