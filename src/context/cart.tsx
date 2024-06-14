import { createContext, useContext, useState } from "react";
import { ProductType } from "../interfaces/product.interface";

interface CartContextType {
    cart: ProductType[];
    addProduct: (product:ProductType) => void
    clearCart: () => void
    removeFromCart: (product:ProductType) => void
}

export const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({children}: {children:React.ReactNode}) {
    const [cart, setCart] = useState<ProductType[]>(() => {
        const savedCart = window.localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })
    
    const addProduct = (product:ProductType) => {
        /* const findProduct = cart.findIndex((p) => p.id === product.id)
        if(findProduct >= 0) {
            const newCart = structuredClone(cart) // Copia de cart
            newCart[findProduct].quantity! += 1
            setCart(newCart)
        } else {
            setCart(prevState => ([
                ...prevState, 
                {
                    ...product,
                    quantity: 1
                }
            ]))
        } */
       setCart(prevCart => {
            const findProduct = prevCart.findIndex((p) => p.id === product.id)
            let newCart
            if(findProduct >= 0) {
                newCart = structuredClone(cart)
                newCart[findProduct].quantity! += 1
            } else {
                newCart = [...prevCart, {...product, quantity: 1}]
            }
            window.localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
       })

    }

    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = (product:ProductType) => {
        //setCart(prevState => prevState.filter(p => p.id !== product.id))
        setCart(prevCart => {
            const newCart = prevCart.filter(p => p.id !== product.id)
            window.localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }
    return (
        <CartContext.Provider value={{
            cart, 
            addProduct, 
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error('useCartContext debe usarse dentro de un CartContextProvider');
    }

    return context
}