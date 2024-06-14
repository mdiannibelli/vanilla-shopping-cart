import { useId } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import './Cart.css'
import { useCartContext } from '../context/cart'

const Cart = () => {
    const cartId = useId()
    const { cart, clearCart, addProduct, removeFromCart } = useCartContext()
  return (
    <div className="flex w-full justify-between">
          <div className="flex flex-1 justify-center">
            <h1 className="text-4xl text-white font-semibold">Shopping Cart🛒</h1>
          </div>
         
            <label className='cart-button cursor-pointer z-10' htmlFor={cartId}><IoCartOutline className="text-white bg-cyan-500 rounded-2xl p-2" size={35}/></label>
            <input type="checkbox" id={cartId} hidden  />
          

          <aside className='cart overflow-scroll bg-gray-800 fixed top-0 right-0 p-4 w-[300px]'>
             <button onClick={clearCart} className='text-white relative ml-2 top-9 text-sm border-2 px-2 py-1 border-cyan-500 hover:bg-cyan-500 duration-300 rounded'>Clear cart</button>
             <ul className='mt-32'>
                {
                    cart.length > 0 ? 
                    cart.map((p) => (
                        <li key={p.id} className='flex flex-col justify-end items-end'>
                            <img src={p.thumbnail} alt={p.title} />
                        <div>
                            <strong className='text-white text-xs'>{p.title}</strong>
                        </div>
                        <footer className='flex gap-2'>
                            <small className='text-white'>Quantity: {p.quantity}</small>
                            <button onClick={() => addProduct(p)} className='text-white bg-cyan-500 rounded-md py-0 px-2'>+</button>
                        </footer>
                            <button onClick={() => removeFromCart(p)} className='text-white relative ml-2 top-9 text-xs border-2 px-2 py-1 border-cyan-500 hover:bg-cyan-500 duration-300 rounded'>Remove from cart</button>
                        </li>
                    ))
                    : <span className='text-xs text-white flex justify-center'>No hay elementos en el carrito</span>
                }
             </ul>
          </aside>
        </div>
  )
}

export default Cart
