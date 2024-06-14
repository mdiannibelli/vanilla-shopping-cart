import { useFiltersContext } from "../context/filters";


const Filters = () => {
    const { filters, setFilters } = useFiltersContext() 
    const handlePrice = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: Number(e.target.value)
        }))
    }

    const handleCategory = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setFilters(prevState => ({
            ...prevState, 
            category: e.target.value
        }))
    }
  return (
    <div className='flex gap-x-12 mt-12'>
      <label className="text-white" htmlFor="price">Price since:</label>
      <input id='price' type="range" min='0' max='300' value={filters.minPrice} onChange={handlePrice}/>
      <span className="text-white font-semibold">${filters.minPrice}</span>
      <select name="category" id="category" value={filters.category} onChange={handleCategory}>
        <option value="all">All</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
      </select>
    </div>
  )
}

export default Filters
